import React from 'react';
import Link from 'next/link';
import ReactGA from 'react-ga';
import useImgUrl from '../utils/useImgUrl';

const RafisaLogo = useImgUrl("/assets/logos/rafisa (2).svg")
const PhoneLogo = useImgUrl("/assets/icons/phone-call.svg")
const EmailLogo = useImgUrl("/assets/icons/email (1).svg")
const WhatsappLogo = useImgUrl("/assets/icons/whatsapp.svg")

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
          <li><Link href="/#main-section"><a>Home</a></Link></li>
          <li><Link href="/#buttons"><a>Sobre</a></Link></li>
          <li><Link href="/#products"><a>Produtos</a></Link></li>
          <li><Link href="/#form"><a>Contato</a></Link></li>
        </ul>
      </div>

      <div>

        <ul className="contact contact-header ">

          <li>
            <img src={PhoneLogo} className="logo-svg" alt="Logo telefone" />
            (47)&nbsp;3455&#8209;0780
          </li>

          <li className="mail">
            <img src={EmailLogo} className="logo-svg" alt="E-mail logo" />
            <a href="mailto:vendas@rafisa.com.br" onClick={() => {eventHandler("Botão", "Botão de e-mail (topo)")}}>vendas@rafisa.com.br</a>
          </li>

          <li className="whats">
              <img src={WhatsappLogo} className="logo-svg" alt="Logo WhatsApp" />
              <a target="_blank" onClick={() => {eventHandler("Botão", "Botão do whatsapp (cabeçalho)") }}href="https://api.whatsapp.com/send?phone=5547991973626&text=Oi,%20eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Rafisa!">
                (47)&nbsp;9&nbsp;9177&#8209;3626
              </a>
          </li>

        </ul>

      </div>

    </div>



    </header>
  )
}