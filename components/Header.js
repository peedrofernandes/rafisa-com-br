import React from 'react';
import Link from 'next/link';
import ReactGA from 'react-ga';

const RafisaLogo = "/assets/logos/rafisa (2).svg"
const PhoneLogo = "/assets/icons/phone-call.svg"
const EmailLogo = "/assets/icons/email (1).svg"
const WhatsappLogo = "/assets/icons/whatsapp.svg"

export default function Header(props) {

  const eventHandler = (category, action) => {
    ReactGA.event({category, action})
  }

  return (
  <header className="header" style={props.style}>

    <div className="logo">
      <a href="/"><img className="small" src={RafisaLogo} alt="Logo Rafisa" /></a>
    </div>


    <div className="header-info">

      <div className="nav-menu">
        <ul>
          <li><Link href="/#main-section">Home</Link></li>
          <li><Link href="/#buttons">Sobre</Link></li>
          <li><Link href="/#products">Produtos</Link></li>
          <li><Link href="/#form">Contato</Link></li>
        </ul>
      </div>

      <div>

        <ul className="contact contact-header">

          <li>
            <Link href="tel:4734550780">
            <img src={PhoneLogo} className="logo-svg" alt="Pequeno ícone clicável com o desenho de um telefone" />
            (47)&nbsp;3455&#8209;0780
            </Link>
          </li>

          <li className="mail">
            <Link href="mailto:vendas@rafisa.com.br" onClick={() => { eventHandler("Botão", "Botão de e-mail (topo)") }}>
            <img src={EmailLogo} className="logo-svg" alt="Pequeno ícone clicável com o desenho de um envelope, representando email" />
            vendas@rafisa.com.br
            </Link>
          </li>

            <li className="whats">
              <Link
                target="_blank"
                onClick={() => eventHandler("Botão", "Botão do whatsapp (cabeçalho)")}
                href="https://api.whatsapp.com/send?phone=5547991908897&text=Oi,%20eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Rafisa!"
              >
              <img src={WhatsappLogo} className="logo-svg" alt="Pequeno ícone clicável com a logo do WhatsApp" />
                (47)&nbsp;9&nbsp;9190&#8209;8897
              </Link>
          </li>

        </ul>

      </div>

    </div>



    </header>
  )
}