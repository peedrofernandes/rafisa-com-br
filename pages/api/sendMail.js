import nodemailer from 'nodemailer';

const user = "vendas@rafisa.com.br";
const pass = process.env.EMAIL_PASS;

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await sendMail(req, res);
      break;
  }
}

const sendMail = async (req, res) => {
  const { nome, email, telefone, empresa, mensagem, assunto } = req.body;

  const subj = `${empresa} - ${assunto}`

  const mensagemFormatada = `
  <!DOCTYPE html>
  <html lang="pt-br">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensagem enviada por um usuário no site</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');
    
    html, body {
      font-family: 'Montserrat', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p {
      text-align: center;
      margin: 2px 0;
    }

    th, td {
      padding: 12px 20px;
      text-align: center;
    }

    .combined-tables {
      max-width: 800px;
      margin: 70px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    </style>
  </head>

  <body>
    <div class="combined-tables">


      <table>

        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Empresa</th>
            <th>Telefone</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${empresa}</td>
          </tr>
        </tbody>

      </table>


      <table>

        <thead>
          <tr><th>Mensagem</th></tr>
        </thead>

        <tbody>
          <tr>
            <td>
              ${mensagem}
            </td>
          </tr>
        </tbody>

      </table>


    </div>
  </body>

  </html>
  `

  const props = {
    host: "smtp.umbler.com",
    port: 587,
    auth: { user, pass }
  }


  const transporter = nodemailer.createTransport(props);

  try {
    await transporter.sendMail({
      from: user,
      to: user,
      replyTo: email,
      subject: subj,
      html: mensagemFormatada
    });
    res.status(200).send({
      header: 'Tudo OK',
      msg: 'E-mail enviado com sucesso! Entraremos em contato em algumas horas (verifique a sua caixa de spam)'
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
      header: 'Erro de envio',
      msg: `Houve um erro ao enviar o e-mail. Erro: ${error.message}`
    });
  }
}