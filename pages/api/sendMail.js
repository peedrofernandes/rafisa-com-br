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
  <div style="display: flex">
    <h4>Nome:</h4>
    <p style="vertical-align: middle">${nome}</p>
  </div>
  <div style="display: flex">
    <h4>E-mail:</h4>
    <p style="vertical-align: middle">${email}</p>
  </div>
  <div style="display: flex">
    <h4>Telefone:</h4>
    <p style="vertical-align: middle">${telefone}</p>
  </div>
  <div style="display: flex">
    <h4>Empresa:</h4>
    <p style="vertical-align: middle">${empresa}</p>
  </div>
  <p>${mensagem}</p>
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
      header: 'Tudo OK"',
      msg: 'E-mail enviado com sucesso!'
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
      header: 'Erro de envio',
      msg: `Houve um erro ao enviar o e-mail. Erro: ${error.message}`
    });
  }
}