import Header from '../components/Header';
import EntryBanner from '../components/EntryBanner';
import BoxOverlap from '../components/BoxOverlap';
import Info from '../components/Info';
import Products from '../components/Products';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Notify from '../components/Notify';
import WhatsAppButton from '../components/WhatsAppButton';

import Head from "next/head"
import Script from "next/script"

const ScrollScript = "/scripts/scroll.js"

import { useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';

export default function Home(props) {
  const { state, dispatch } = useContext(DataContext);
  const { userInfo, notify } = state;

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasil",
      "addressRegion": "SC",
      "streetAddress": "Rua São Paulo 4351, bairro Floresta, Joinville - SC",
      "postalCode": "89208-545",
    },
    "description": "Fábrica de embalagens de ráfia localizada na cidade de Joinville, Santa Catarina",
    "name": "Rafisa Comércio de Sacarias",
    "telephone": "(47) 3455-0780",
    "openingHours": [
      "Mo-Th 8:00-18:00",
      "Fr 8:00-17:00"
    ],
  }

  const productSetStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "brand": "Rafisa - Comércio de Sacarias",
    "category": "Embalagens de ráfia para armazenamento de fertilizantes, entulhos, grãos, contenção de morros, materiais de construção, dentre muitos outros",
    "keywords": "Sacaria de ráfia, Ráfia, Saco de Ráfia, Embalagens de ráfia, Polipropileno, Sacaria para Contenção, Saco para entulho, Saco para grãos, Saco para terras",
    "hasVariant": [
      {
        "@id": "https://rafisa.com.br/produto/convencional/schema",
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Sacaria convencional",
        "description": "Sacaria de polipropileno para armazenamento de fertilizantes, grãos, terra, materiais de construção civil, ferramentas, contenção de barrancos, dentre muitas outras utilidades!",
        "brand": {
          "@type": "Brand",
          "name": "Rafisa"
        },
        "material": "Polipropileno - Ráfia",
        "url": "https://rafisa.com.br/produto/convencional"
      },
      {
        "@id": "https://rafisa.com.br/produto/impresso/schema",
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Sacaria impressa",
        "description": "Sacaria de polipropileno impressa com a sua marca para armazenamento de fertilizantes, grãos, terra, materiais de construção civil, ferramentas, contenção de barrancos, dentre muitas outras utilidades!",
        "brand": {
          "@type": "Brand",
          "name": "Rafisa"
        },
        "material": "Polipropileno - Ráfia",
        "url": "https://rafisa.com.br/produto/impresso"
      },
      {
        "@id": "https://rafisa.com.br/produto/laminado/schema",
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Sacaria laminada",
        "description": "Sacaria de polipropileno laminada para armazenamento de fertilizantes, grãos, terra, materiais de construção civil, ferramentas, contenção de barrancos, dentre muitas outras utilidades!",
        "brand": {
          "@type": "Brand",
          "name": "Rafisa"
        },
        "material": "Polipropileno - Ráfia",
        "url": "https://rafisa.com.br/produto/convencional"
      }
      
    ]
  }

  const closeNotifyHandler = (e) => {
    const input = e.target;
    setTimeout(() => {
      dispatch({ type: 'NOTIFY', payload: {} });
      input.checked = false;
    }, 1000)
  }

  return (
    <div>

      <Head>
        <title>Rafisa - Embalagens de ráfia</title>
        <meta name="description" content="Sacos de ráfia para armazenamento de Fertilizantes, rações, entulhos, cereais, sal, peças metálicas, materiais de construção civil, contenção de barrancos, dentre muitos outros!"/>
        <link rel="canonical" href="https://rafisa.com.br/" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessStructuredData)
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSetStructuredData)
          }}
        />
      </Head>

      <input name="close" id="close" type="radio"></input>
      <WhatsAppButton></WhatsAppButton>

      <input onChange={closeNotifyHandler} name="close2" id="close2" type="radio"></input> 
      <Notify></Notify>
      

      <section id="main-section">
        <Header></Header>
        <EntryBanner></EntryBanner>
      </section>

      <main id="content">

        <BoxOverlap></BoxOverlap>
        <Info></Info>

        <Products></Products>
        
        <Form assunto='Genérico' formSource="Página principal"></Form>
        <iframe
          className="maps maps-main"
          width="1200"
          height="300"
          allowFullScreen=""
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.214627927318!2d-48.842221427079714!3d-26.34560660194376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1a7aa112f43%3A0xe2eec0258506539!2sRafisa%20Com%C3%A9rcio%20de%20Sacarias!5e0!3m2!1spt-BR!2sbr!4v1623527275272!5m2!1spt-BR!2sbr">
        </iframe>

      </main>

      <Footer></Footer>
      <script src={ScrollScript}></script>

    </div>
  )
}
