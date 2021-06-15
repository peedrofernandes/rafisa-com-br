// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/a', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/b', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })

const next = require('next');
const express = require('express');
const port = 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.all('*', (req, res) => {
  //     if (req.headers['x-forwarded-proto'] == 'https') {
  //       return handle(req, res);
  //     } else {
  //       res.redirect(`https://${req.headers.host}${req.originalUrl}`);
  //     }
  //   return handle(req, res);
  // });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // server.get("/", (req, res) => {
  //   return app.render(req, res, "/", req.query);
  // })

  server.listen(port, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Server running on port ${port}`);
    }
  });
});
