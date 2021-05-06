import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <section id="main-section">

        <header className="header">

          <div className="logo">
            <img className="small" src="./Logos/rafisa (2).svg" alt="Logo Rafisa" />
          </div>


          <div className="header-info">

            <div className="nav-menu">
              <ul>
                <li><a href="#main-section">Home</a></li>
                <li><a href="#buttons">Sobre</a></li>
                <li><a href="#products">Produtos</a></li>
                <li><a href="#form">Contato</a></li>
              </ul>
            </div>

            <div>

              <ul className="contact contact-header ">

                <li>
                  <img src="./assets/Images/phone-call.svg" className="logo-svg" alt="Logo telefone" />
        (47)&nbsp;3455&#8209;0780
      </li>

                <li>
                  <img src="./assets/Images/email (1).svg" className="logo-svg" alt="E-mail logo" />
        rafisa@rafisa.com.br
      </li>

                <li>
                  <img src="./assets/Images/whatsapp.svg" className="logo-svg" alt="Logo WhatsApp" />
        (47)&nbsp;9&nbsp;9177&#8209;3626
      </li>

              </ul>

            </div>

          </div>



        </header>

        <div className="entry">
          <h3>Lorem ipsum dolor sit</h3>
          <h1>Lorem ipsum</h1>
          <div className="buttons">
            <ul>
              <li>Ver produtos</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
      </section>

      <main id="content">

        <div className="box overlap">
          <h1>Sobre a Rafisa</h1>
        </div>



        <div className="info">

          <div className="left">

            <article>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores ad quam suscipit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quo ea nulla voluptate eaque illo facere, officia repudiandae dolorem veniam reiciendis sequi nobis at odio earum, natus quas sit recusandae.</p>
            </article>

            <article>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores ad quam suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>

            <article>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores ad quam suscipit!</p>
            </article>

          </div>


          <div className="right">

            <div className="vitra-banner">
              <img src="./assets/Images/vitrabanner.jpg" alt="Máquina Vitra" />
            </div>

          </div>

        </div>

        <hr />

        <section id="products">
          <h1>O que a Rafisa oferece</h1>

          <article className="product show-on-scroll">

            <div className="aside">
              <h3>Sacaria <strong>Convencional</strong></h3>
            </div>

            <div className="card">
              <p>Sacaria com ótimo custo benefício para minimizar seus gastos de produção</p>

              <div>
                <div id="slider">
                  <input type="radio" name="slider" id="slide1" checked></input>
                  <input type="radio" name="slider" id="slide2"></input>
                  <input type="radio" name="slider" id="slide3"></input>
                  <input type="radio" name="slider" id="slide4"></input>

                  <div id="slides">
                    <div id="overflow">
                      <div className="inner">

                        <div className="slide slide_1">
                          <div className="slide-content">
                            <h2>Slide 1</h2>
                            <p>Conteúdo para o slide 1</p>
                          </div>
                        </div>

                        <div className="slide slide_2">
                          <div className="slide-content">
                            <h2>Slide 2</h2>
                            <p>Conteúdo para o slide 2</p>
                          </div>
                        </div>

                        <div className="slide slide_3">
                          <div className="slide-content">
                            <h2>Slide 3</h2>
                            <p>Conteúdo para o slide 3</p>
                          </div>
                        </div>

                        <div className="slide slide_4">
                          <div className="slide-content">
                            <h2>Slide 4</h2>
                            <p>Conteúdo para o slide 4</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div id="controls">
                    <label htmlFor="slide1"></label>
                    <label htmlFor="slide2"></label>
                    <label htmlFor="slide3"></label>
                    <label htmlFor="slide4"></label>
                  </div>

                  <div id="bullets">
                    <label htmlFor="slide1"></label>
                    <label htmlFor="slide2"></label>
                    <label htmlFor="slide3"></label>
                    <label htmlFor="slide4"></label>
                  </div>

                </div>
                <button className="button">SABER MAIS</button>
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
                <img className="medium" src="./assets/Images/rafia.png" alt="Bobina de ráfia" />
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
                <img className="medium" src="./assets/Images/rafia.png" alt="Bobina de ráfia" />
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
                <img className="medium" src="./assets/Images/rafia.png" alt="Bobina de ráfia" />
                <button className="button">SABER MAIS</button>
              </div>
            </div>

          </article>


        </section>

        <hr />

        <section id="form">
          <h2>Fale conosco!</h2>
          <form action="">

            <div className="form">

              <div className="form-input">
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome" placeholder="Seu primeiro nome"></input>
              </div>

              <div className="form-input">
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" placeholder="E-mail"></input>
              </div>

              <div className="form-input">
                <label htmlFor="telefone">Telefone: </label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{5}-[0-9]{4}" id="telefone" name="telefone" placeholder="Seu telefone"></input>
              </div>

              <div className="form-input">
                <label htmlFor="empresa">Empresa: </label>
                <input type="text" id="empresa" name="empresa" placeholder="Nome da sua empresa (opcional)"></input>
              </div>

              <div className="form-input">
                <label htmlFor="message">Mensagem: </label>
                <textarea placeholder="Digite aqui a sua mensagem" name="message" id="message" cols="30" rows="10"></textarea>
              </div>

              <div className="form-input">
                <button className="button" type="submit">Enviar mensagem</button>
              </div>
            </div>

          </form>

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
              <img src="./assets/Images/phone-call.svg" className="logo-svg" alt="Logo telefone" />
      (47) 3455&#8209;0780
    </li>
            <li>
              <img src="./assets/Images/email (1).svg" className="logo-svg" alt="E-mail logo" />
      rafisa@rafisa.com.br
    </li>
            <li>
              <img src="./assets/Images/whatsapp.svg" className="logo-svg" alt="Logo WhatsApp" />
      (47) 9 9177&#8209;3626
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
      <script type="text/javascript" src="animation-scroll.js"></script>
    </div>
  )
}
