import React from 'react';
import Link from 'next/link';

export default function Header(props) {
  return (
  <header className="header" style={props.style}>

    <div className="logo">
      <img className="small" src="/assets/logos/rafisa (2).svg" alt="Logo Rafisa" />
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
            <img src="/assets/icons/phone-call.svg" className="logo-svg" alt="Logo telefone" />
            (47)&nbsp;3455&#8209;0780
          </li>

          <li>
            <img src="/assets/icons/email (1).svg" className="logo-svg" alt="E-mail logo" />
            rafisa@rafisa.com.br
          </li>

          <li>
            <img src="/assets/icons/whatsapp.svg" className="logo-svg" alt="Logo WhatsApp" />
            (47)&nbsp;9&nbsp;9177&#8209;3626
          </li>

        </ul>

      </div>

    </div>



    </header>
  )
}