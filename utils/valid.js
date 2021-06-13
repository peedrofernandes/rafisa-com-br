const valid = (nome, email, telefone, empresa, mensagem) => {
  
  // if (!nome || !email || !telefone || !empresa || !mensagem) {

  //   const payload = {
  //     error: true,
  //     header: 'Erro no preenchimento dos dados',
  //     msg: 'Por favor, preencha todos os campos!'
  //   }

  //   return payload;
  // }
  if (!nome || !email || !telefone || !empresa || !mensagem)
  return {
    error: true,
    header: 'Erro no preenchimento dos dados',
    msg: 'Por favor, preencha todos os campos!'
  }

  // if (!validateEmail(email)) {

  //   // const type = 'error';
  //   // const header = 'Erro na validação de e-mail';
  //   // const msg = 'O e-mail digitado não é válido!';
  //   const payload = {
  //     error: true,
  //     header: 'Erro na validação de e-mail!',
  //     msg: 'O e-mail digitado não é válido!'
  //   }
    
  //   return payload;
  // }
  if (!validateEmail(email))
  return {
    error: true,
    header: 'Erro na validação do e-mail',
    msg: 'Por favor, verifique se o seu e-mail foi preenchido corretamente!'
  }

}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default valid;


