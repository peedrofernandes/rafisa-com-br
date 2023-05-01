import Head from "next/head"

import Header from '../../components/Header'
import SliderProduto from '../../components/Sliders/SliderProduto'
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import Notify from '../../components/Notify';
import WhatsAppButton from '../../components/WhatsAppButton';

import { DataContext } from '../../store/GlobalState';
import { useContext } from 'react';

export default function Produto(props) {

  const { state, dispatch } = useContext(DataContext);

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
      <title>Rafisa - Sacos de ráfia convencionais</title>
      <meta name="description" content="Sacos de ráfia comuns para armazenamento de fertilizantes, rações, entulhos, cereais, sal, peças metálicas, materiais de construção civil, contenção de barrancos, dentre muitos outros!"/>
      <link rel="canonical" href="https://rafisa.com.br/produto/convencional/"/>
    </Head>

      <input name="close" id="close" type="radio"></input>
      <WhatsAppButton></WhatsAppButton>

      <input onChange={closeNotifyHandler} name="close2" id="close2" type="radio"></input> 
      <Notify></Notify>

      <Header style={{ backgroundColor: '#062c44', margin: 0 }}></Header>

      <main>

        <article>
          <h1>Sacaria Convencional</h1>

          <SliderProduto>
            <div className="slides">
              <div className="overflow full">

                <div className="inner convencional full">

                  <div className="slide slide_1"></div>
                  <div className="slide slide_2"></div>
                  <div className="slide slide_3"></div>
                  <div className="slide slide_4"></div>

                </div>

              </div>
            </div>
          </SliderProduto>
        </article>

        <section id="budget-info">

          <div>

            <div>
              <h2 className="h2-1">Características</h2>
              <p>A sacaria convencional é a linha de produtos mais prática da Rafisa. Feita com os polímeros <strong className="strong-color">polietileno (PE)</strong> e <strong className="strong-color">polipropileno (PP)</strong>, ela é ideal para transporte de cargas não-pontiagudas e revestimento. Se deseja uma embalagem confiável para a melhor experiência com seus produtos, escolha a Sacaria Convencional da Rafisa!</p>
            </div>

            <div>
              
            </div>

          </div>

          <div id="budget">
              <Form className="form-produto" h2="Faça um orçamento!" assunto="Sacaria convencional" formSource="Página das sacarias convencionais"></Form>
          </div>

        </section>

      </main>

      <Footer></Footer>
    </div>
  )
}