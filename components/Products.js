import Slider_1 from "./Sliders/Slider_1"
import Slider_2 from "./Sliders/Slider_2"
import Slider_3 from "./Sliders/Slider_3"

import Link from 'next/link';

export default function Products(props) {
  return (
    <section id="products">
      <h1>O que a Rafisa oferece</h1>

      <article className="product show-on-scroll">

        <div className="aside">
          <h3>Sacaria <strong>Convencional</strong></h3>
        </div>

        <div className="card">
          <p>Sacaria com ótimo custo benefício para minimizar seus gastos de produção</p>

          <div>
            <Slider_1></Slider_1>
            <a href="/produto/convencional"><button className="button">SAIBA MAIS</button></a>
          </div>

        </div>

      </article>

      <article className="product show-on-scroll">

        <div className="aside">
          <h3>Sacaria <strong>Laminada</strong></h3>
        </div>

        <div className="card">
          <p>Sacaria com ótimo custo benefício para minimizar seus gastos de produção</p>
          <div>
          <Slider_2></Slider_2>
            <a href="/produto/laminado"><button className="button">SAIBA MAIS</button></a>
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
            <Slider_3></Slider_3>
            <a href="/produto/impresso"><button className="button">SAIBA MAIS</button></a>
          </div>
        </div>

      </article>


    </section>
  )
}