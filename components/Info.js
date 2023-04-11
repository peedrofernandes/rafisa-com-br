import useImgUrl from "../utils/useImgUrl"

const VitraBanner = useImgUrl("/assets/banners/vitrabanner.jpg")

export default function Info(props) {
  return (
    <div className="info">

          <div className="left">

        <article>
          <h2 className="h2-1">História</h2>
              <p>Há mais de 20 anos no mercado, a Rafisa surgiu como uma tentativa de promover a comodidade à pequenas, médias e grandes empresas, por meio de embalagens de qualidade impecável e que não deixavam de lado o custo-benefício. O tempo de atuação no mercado e o sucesso da Rafisa mostraram que a tentativa anteriormente descrita se transformou em conquista.</p>
            </article>

        <article>
              <h2 className="h2-2">Propósito</h2>
              <p>A nossa principal missão não é só vender ráfia. Enraizados na nossa empresa, a atenção individualizada e o comprometimento com você, cliente, bem como a nossa preocupação com a qualidade de cada unidade dos produtos, nos distingue e nos tornam referência no ramo de embalagens comerciais no sul do Brasil.</p>
            </article>

        <article>
              <h2 className="h2-3">Produtos</h2>
              <p>Logo abaixo você encontrará descrições detalhadas dos nossos produtos. Aproveite!</p>
            </article>

          </div>


          <div className="right">

            <div className="vitra-banner">
              <img src={VitraBanner} alt="Máquina Vitra" />
            </div>

          </div>

        </div>
  )
}