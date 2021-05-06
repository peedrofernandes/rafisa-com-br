
import Header from '../components/Header'
import SliderProduto from '../components/Sliders/SliderProduto'

export default function Produto(props) {
  return (

    <div>
      <Header style={{ backgroundColor: '#062c44', margin: 0 }}></Header>

      <main>

        <article>
          <h1>Sacaria Convencional</h1>

          <SliderProduto>
            <div className="inner full">

              <div className="slide slide_1">
                <div className="slide-content">
                  <h1>Slide 1</h1>
                  <p>Conteúdo para o slide 1</p>
                </div>
              </div>

              <div className="slide slide_2">
                <div className="slide-content">
                  <h1>Slide 2</h1>
                  <p>Conteúdo para o slide 2</p>
                </div>
              </div>

              <div className="slide slide_3">
                <div className="slide-content">
                  <h1>Slide 3</h1>
                  <p>Conteúdo para o slide 3</p>
                </div>
              </div>

            </div>
          </SliderProduto>
        </article>

        <section>

          <div id="budget-info">

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

            </form>
          </div>

        </section>

      </main>

      <footer>

        <div className="footer">

          <div className="footer-info">
            <p>CNPJ: xx-xxx-xxx/xxxx-xx</p>
            <p>Rua São Paulo 4351, Bairro Floresta, Joinville - SC</p>
            <p>Horário de functionamento: de Segunda-feira à Sexta-feira das 8:00 às 18:00</p>
          </div>

          <ul className="contact column">
            <h4>Contato: </h4>
            <li>
              <img src="/assets/icons/phone-call.svg" className="logo-svg" alt="Logo telefone" />
            (47) 3455&#8209;0780
          </li>
            <li>
              <img src="/assets/icons/email (1).svg" className="logo-svg" alt="E-mail logo" />
            rafisa@rafisa.com.br
          </li>
            <li>
              <img src="/assets/icons/whatsapp.svg" className="logo-svg" alt="Logo WhatsApp" />
            (47) 9 9177&#8209;4766
          </li>
          </ul>

          <div>
            <h4>Voltar para:</h4>
            <div className="nav-menu">
              <ul>
                <li><a href="#main-section">Home</a></li>|
              <li><a href="#buttons">Sobre</a></li>|
              <li><a href="#products">Produtos</a></li>|
              <li><a href="#form">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flaticon">
          Ícones feitos por <a href="https://www.flaticon.com">https://www.flaticon.com</a>
        </div>
        <div className="rafisa">
          <p>@Rafisa 2021 - Todos os direitos reservados</p>
        </div>

      </footer>
    </div>
  )
}