export default function Form(props) {
  return (
    <section id="form" className={props.className}>
      <h2>{props.h2}</h2>

        <div className="form">

          <div className="form-input">
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" name="nome" placeholder="Seu primeiro nome"></input>
          </div>

          <div className="form-input">
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" name="email" placeholder="E-mail"></input>
          </div>

          <div className="form-input">
            <label htmlFor="telefone">Telefone: </label>
            <input type="tel" pattern="[0-9]{3}-[0-9]{5}-[0-9]{4}" id="telefone" name="telefone" placeholder="Seu telefone"></input>
          </div>

          <div className="form-input">
            <label htmlFor="empresa">Empresa: </label>
            <input type="text" id="empresa" name="empresa" placeholder="Nome da sua empresa (opcional)"></input>
          </div>

          <div className="form-input">
            <label htmlFor="message">Mensagem: </label>
            <textarea placeholder="Digite aqui a sua mensagem" name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          
          <div>
            <p>Estaremos respondendo no seu e-mail!</p>
          </div>

          <div className="form-input">
            <button className="button" type="submit">Enviar mensagem</button>
          </div>
        </div>

    </section>
  )
}