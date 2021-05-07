

export default function WhatsAppButton(props) {
  return (
      <div className="wpp-container">
        <div>
          <label htmlFor="close">
            <img className="cancel" src="/assets/icons/cancel.svg"></img>
          </label>
        </div>

        <div className="wpp">
          <h4>Faça um orçamento!</h4>
          <img className="whatsimg" src="/assets/icons/whatsapp-color.svg"></img>
          <p>Horário de atendimento: das 08:00 às 18:00</p>
        </div>

      </div>

  )
}