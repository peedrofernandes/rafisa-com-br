import Link from 'next/link';
import ReactGA from 'react-ga';

const PhonecallIcon = "/assets/icons/phone-call.svg"
const EmailIcon = "/assets/icons/email (1).svg"
const WhatsappIcon = "/assets/icons/whatsapp.svg"

export default function Footer(props) {

  const eventHandler = (category, action) => {
    ReactGA.event({ category, action })
  }

  return (
    <footer>

      <section className="footer">

        <div className="footer-info">
          <p>CNPJ: 05-908-602/0001-65</p>
          <p>Rua São Paulo 4351, Bairro Floresta, Joinville - SC</p>
          <p>Horário de funcionamento: de Segunda-feira à Sexta-feira das 8:00 às 18:00</p>
        </div>

        <nav className="contact column">
          <h2>Contato: </h2>
          <ul>
            <li>
              <Link href="tel:4734550780">
              <img src={PhonecallIcon} className="logo-svg" alt="Pequeno ícone clicável com um desenho de um telefone" />
              (47) 3455&#8209;0780
              </Link>
            </li>
            <li className="mail">
              <img src={EmailIcon} className="logo-svg" alt="Pequeno ícone clicável com o desenho de uma caixa de e-mail" />
              <a href="mailto:vendas@rafisa.com.br" onClick={() => { eventHandler("Botão", "Botão de e-mail (rodapé)") }}>vendas@rafisa.com.br</a>
            </li>
            <li className="whats">
              <img src={WhatsappIcon} className="logo-svg" alt="Ícone da logo do Whatsapp" />
              <a target="_blank" onClick={() => {eventHandler("Botão", "Botão de Whatsapp (rodapé)")}} href="https://api.whatsapp.com/send?phone=5547991908897&text=Oi,%20eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Rafisa!">(47) 9 9190&#8209;8897</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2>Voltar para:</h2>
          <nav className="nav-menu">
            <ul>
              <li><a href="#main-section">Home</a></li>|
              <li><a href="#buttons">Sobre</a></li>|
              <li><a href="#products">Produtos</a></li>|
              <li><a href="#form">Contato</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <div className="flaticon">
        <p>
          Ícones feitos por <a href="https://www.flaticon.com">
            https://www.flaticon.com
          </a>
        </p>
      </div>
      <div className="rafisa">
        <p>@Rafisa 2021 - Todos os direitos reservados</p>
      </div>

    </footer>
  )
}