import Header from '../../components/Header'
import SliderProduto from '../../components/Sliders/SliderProduto'
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export default function Produto(props) {
  return (

    <div>
      <Header style={{ backgroundColor: '#062c44', margin: 0 }}></Header>

      <main>

        <article>
          <h1>Sacaria Convencional</h1>

          <SliderProduto>
            <div className="slides slides-4">
              <div className="overflow full">

                <div className="inner inner-4 convencional full">

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
              <h2>Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure et necessitatibus ex est dignissimos tenetur harum voluptates aliquam, maiores quos perspiciatis quidem placeat amet error molestiae. Repellat, provident sint.</p>
            </div>

            <div>
              <h2>Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure et necessitatibus ex est dignissimos tenetur harum voluptates aliquam, maiores quos perspiciatis quidem placeat amet error molestiae. Repellat, provident sint.</p>
            </div>

          </div>

          <div id="budget">
            <form action="">
              <Form className="form-produto" h2="Faça um orçamento!"></Form>
            </form>
          </div>

        </section>

      </main>

      <Footer></Footer>
    </div>
  )
}