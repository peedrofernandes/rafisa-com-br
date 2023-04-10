import Header from '../components/Header';
import EntryBanner from '../components/EntryBanner';
import BoxOverlap from '../components/BoxOverlap';
import Info from '../components/Info';
import Products from '../components/Products';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Notify from '../components/Notify';
import WhatsAppButton from '../components/WhatsAppButton';

const ScrollScript = "/scripts/scroll.js"

import { useContext, useEffect } from 'react';
import { DataContext } from '../store/GlobalState';

export default function Home(props) {


  const { state, dispatch } = useContext(DataContext);
  const { userInfo, notify } = state;

  const closeNotifyHandler = (e) => {
    const input = e.target;
    setTimeout(() => {
      dispatch({ type: 'NOTIFY', payload: {} });
      input.checked = false;
    }, 1000)
  }

  return (
    <div>

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

        <hr />

        <Products></Products>

        <hr />
        
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
