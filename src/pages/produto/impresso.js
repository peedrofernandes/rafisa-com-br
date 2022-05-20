import Header from '../../components/Header'
import SliderProduto from '../../components/Sliders/SliderProduto'
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import Notify from '../../components/Notify';
import WhatsAppButton from '../../components/WhatsAppButton';

import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState';

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

      <input name="close" id="close" type="radio"></input>
      <WhatsAppButton></WhatsAppButton>

      <input onChange={closeNotifyHandler} name="close2" id="close2" type="radio"></input> 
      <Notify></Notify>

      <Header style={{ backgroundColor: '#062c44', margin: 0 }}></Header>

      <main>

        <article>
          <h1>Sacaria Impressa</h1>

          <SliderProduto>
            <div className="slides">
              <div className="overflow full">

                <div className="inner impressa full">

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
              <p>A Sacaria Impressa nada mais é do que a junção dos produtos da Rafisa com a nítida estampa da sua marca neles! Você pode adquirir sacaria impressa tanto laminada quanto convencional. No seu primeiro pedido, nós providenciaremos o clichê de impressão com a cara da sua empresa. A partir disso, nós vamos guardá-lo e deixa-lo pronto para o próximo! Faça um orçamento da sacaria impressa agora mesmo!</p>
            </div>

            <div>

            </div>

          </div>

          <div id="budget">
              <Form className="form-produto" h2="Faça um orçamento!" assunto="Sacaria impressa" formSource="Página das sacarias impressas"></Form>
          </div>

        </section>

      </main>

      <Footer></Footer>
    </div>
  )
}