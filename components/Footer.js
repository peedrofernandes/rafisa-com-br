import ReactGA from 'react-ga';

export default function Footer(props) {

  const eventHandler = (category, action) => {
    ReactGA.event({ category, action })
  }

  return (
    <footer>

      <div className="footer">

        <div className="footer-info">
          <p>CNPJ: 05-908-602/0001-65</p>
          <p>Rua São Paulo 4351, Bairro Floresta, Joinville - SC</p>
          <p>Horário de funcionamento: de Segunda-feira à Sexta-feira das 8:00 às 18:00</p>
        </div>

        <ul className="contact column">
          <h4>Contato: </h4>
          <li>
            <img src="/assets/icons/phone-call.svg" className="logo-svg" alt="Logo telefone" />
      (47) 3455&#8209;0780
    </li>
          <li className="mail">
            <img src="/assets/icons/email (1).svg" className="logo-svg" alt="E-mail logo" />
            <a href="mailto:rafisa@rafisa.com.br" onClick={() => { eventHandler("Botão", "Botão de e-mail (rodapé)") }}>rafisa@rafisa.com.br</a>
    </li>
          <li className="whats">
            <img src="/assets/icons/whatsapp.svg" className="logo-svg" alt="Logo WhatsApp" />
            <a onClick={() => {eventHandler("Botão", "Botão de Whatsapp (rodapé)")}} href="https://api.whatsapp.com/send?phone=5547991973626&text=Oi,%20eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Rafisa!">(47) 9 9177&#8209;3626</a>
    </li>
        </ul>

        <div>
          <h4>Voltar para:</h4>
          <div className="nav-menu">
            <ul>
              <li><a href="#main-section">Home</a></li>|
        <li><a href="#buttons">Sobre</a></li>|
        <li><a href="#products">Produtos</a></li>|
        <li><a href="#form">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flaticon">
        Ícones feitos por <a href="https://www.flaticon.com">https://www.flaticon.com</a>
      </div>
      <div className="rafisa">
        <p>@Rafisa 2021 - Todos os direitos reservados</p>
      </div>

    </footer>
  )
}