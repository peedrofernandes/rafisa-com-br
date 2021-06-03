function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function valid(nome, email, telefone, empresa, mensagem) {
  
  if (!nome || !email || !telefone || !mensagem) {

    const payload = {
      type: 'error',
      header: 'Erro no preenchimento dos dados',
      msg: 'Por favor, preencha todos os campos!'
    }

    return payload;
  }

  if (!validateEmail(email)) {

    const type = 'error';
    const header = 'Erro na validação de e-mail';
    const msg = 'O e-mail digitado não é válido!';
    const payload = { type, header, msg }
    
    return payload;
  }

}


