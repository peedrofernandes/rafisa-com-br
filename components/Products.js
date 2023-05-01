import SliderMain from '../components/Sliders/SliderMain';

export default function Products(props) {
  return (
    <section id="products">
      <h2 style={{ textAlign: "center" }}>O que a Rafisa oferece</h2>

      <article className="product show-on-scroll">

        <div className="aside">
          <h3>Sacaria<strong>Convencional</strong></h3>
        </div>

        <div className="card">
          <p>Sacaria com ótimo custo benefício para minimizar seus gastos de produção</p>

          <div>
            <SliderMain className="convencional" id="1">

              <div className="slides">

                <div className="overflow">

                  <div className="inner inner-4">

                    <div className="slide slide_1"></div>

                    <div className="slide slide_2"></div>

                    <div className="slide slide_3"></div>

                    <div className="slide slide_4"> </div>

                  </div>

                </div>

              </div>

            </SliderMain>
            <a href="/produto/convencional" className="button-container"><button className="button">SAIBA MAIS</button></a>
          </div>

        </div>

      </article>

      <article className="product show-on-scroll">

        <div className="aside">
          <h3>Sacaria <strong>Laminada</strong></h3>
        </div>

        <div className="card">
          <p>Sacaria com revestimento extra para maior segurança dos seus produtos</p>
          <div>
            <SliderMain className="laminada" id="2">
              
              <div className="slides">

                <div className="overflow">

                  <div className="inner inner-4">

                    <div className="slide slide_1"></div>

                    <div className="slide slide_2"></div>

                    <div className="slide slide_3"></div>

                    <div className="slide slide_4"> </div>

                  </div>

                </div>

              </div>

          </SliderMain>
            <a href="/produto/laminado" className="button-container"><button className="button">SAIBA MAIS</button></a>
          </div>
        </div>

      </article>

      <article className="product show-on-scroll">

        <div className="aside">
          <h3>Sacaria <strong>Impressa</strong></h3>
        </div>

        <div className="card">
          <p>Sacaria com ótimo custo benefício para minimizar seus gastos de produção</p>
          <div>
            <SliderMain className="impressa" id="3">

              <div className="slides">

                <div className="overflow">

                  <div className="inner inner-4">

                    <div className="slide slide_1"></div>

                    <div className="slide slide_2"></div>

                    <div className="slide slide_3"></div>

                    <div className="slide slide_4"> </div>

                  </div>

                </div>

              </div>

            </SliderMain>
            <a href="/produto/impresso" className="button-container"><button className="button">SAIBA MAIS</button></a>
          </div>
        </div>

      </article>


    </section>
  )
}