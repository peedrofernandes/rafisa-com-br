import Link from 'next/link';
import ReactGA from 'react-ga';

const CancelIcon = "/assets/icons/cancel (1).svg"
const WhatsImg = "/assets/icons/whatsapp-color.svg"

export default function WhatsAppButton(props) {

  const eventHandler = (category, action) => {
    ReactGA.event({ category, action });
  }

  return (
      <div className="wpp-container">
        <div>
          <label htmlFor="close">
            <img className="cancel" src={CancelIcon} alt="Pequeno ícone com um X indicando fechamento da janela"/>
          </label>
        </div>

        <div className="wpp">
        <h2>Fale conosco!</h2>
        <Link
          href="https://api.whatsapp.com/send?phone=5547991908897&text=Oi,%20eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Rafisa!"
          target="_blank"
          onClick={() => {eventHandler("Botão", "Botão do whatsapp (card)")}}
        >
          <img className="whatsimg" src={WhatsImg} alt="Imagem pequena com a logo do WhatsApp em verde" />
        </Link>
        <p>Horário de atendimento: das 08:00 às 18:00</p>
        </div>

      </div>

  )
}