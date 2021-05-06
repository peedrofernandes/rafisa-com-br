import Slider_1 from "./Sliders/Slider_1"
import Slider_2 from "./Sliders/Slider_2"
import Slider_3 from "./Sliders/Slider_3"
import Slider_4 from "./Sliders/Slider_4"

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
            <Link href="/produto"><a><button className="button">SABER MAIS</button></a></Link>
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
            <button className="button">SABER MAIS</button>
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
            <button className="button">SABER MAIS</button>
          </div>
        </div>

      </article>

      <article className="product show-on-scroll">

        <div className="aside">
          <h3>Sacaria para o consumidor final à <strong>pronta entrega</strong></h3>
        </div>

        <div className="card">
          <p>Sacaria com ótimo custo benefício para minimizar seus gastos de produção</p>
          <div>
          <Slider_4></Slider_4>
            <button className="button">SABER MAIS</button>
          </div>
        </div>

      </article>


    </section>
  )
}