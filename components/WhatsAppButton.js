import Link from 'next/link';
import ReactGA from 'react-ga';
import useImgUrl from '../utils/useImgUrl';

const CancelIcon = useImgUrl("/assets/icons/cancel (1).svg")
const WhatsImg = useImgUrl("/assets/icons/whatsapp-color.svg")

export default function WhatsAppButton(props) {

  const eventHandler = (category, action) => {
    ReactGA.event({ category, action });
  }

  return (
      <div className="wpp-container">
        <div>
          <label htmlFor="close">
            <img className="cancel" src={CancelIcon} />
          </label>
        </div>

        <div className="wpp">
        <h4>Fale conosco!</h4>
        <Link href="https://api.whatsapp.com/send?phone=5547991973626&text=Oi,%20eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Rafisa!">
          <a target="_blank" onClick={() => {eventHandler("Botão", "Botão do whatsapp (card)")}}>
            <img className="whatsimg" src={WhatsImg} />
          </a>
        </Link>
        <p>Horário de atendimento: das 08:00 às 18:00</p>
        </div>

      </div>

  )
}