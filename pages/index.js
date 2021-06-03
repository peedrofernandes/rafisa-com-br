import Header from '../components/Header';
import EntryBanner from '../components/EntryBanner';
import BoxOverlap from '../components/BoxOverlap';
import Info from '../components/Info';
import Products from '../components/Products';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { useContext } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import Notify from '../components/Notify';
import { DataContext } from '../store/GlobalState';

export default function Home(props) {

  // const { state, dispatch } = useContext(DataContext);
  // const { userInfo } = state;

  const { state, dispatch } = useContext(DataContext);
  const { userInfo } = state;

  // const formSubmitHandler = async (event) => {
  //   event.preventDefault();
  // }

  

  return (
    <div>

      <input name="close" id="close" type="radio"></input>
      <WhatsAppButton></WhatsAppButton>

      <input name="close2" id="close2" type="radio"></input> 
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
        
          <Form assunto='Genérico'></Form>

      </main>

      <Footer></Footer>
      <script src="/scripts/scroll.js"></script>

    </div>
  )
}
