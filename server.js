const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3000 : 80
const app = next({ dev });

const url = process.env.BASE_URL;

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    
    const hostname = req.hostname === `www.${url}` ? url : req.hostname;

    if (req.headers['x-forwarded-proto'] === 'http' || req.hostname === `www.${url}`) {
      res.redirect(301, `https://${hostname}${req.url}`)
      return;
    }

    res.setHeader('strict-transport-security', 'max-age=31536000', 'includeSubDomains', 'preload');
    next();
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, (error) => {
    if (error) throw error;
    console.error(`Running - Listening on port ${port}!`);
  })
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
