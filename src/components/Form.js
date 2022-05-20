import { DataContext } from "../store/GlobalState";
import { useContext, useState } from 'react';
import valid from "../utils/valid";
import { postData } from "../utils/fetchData";
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.br';
import ReactGA from 'react-ga';

export default function Form(props) {

  const initialUser = { nome: '', email: '', telefone: '', empresa: '', mensagem: '' };

  const { state, dispatch } = useContext(DataContext);

  const [userInfo, setUserInfo] = useState(initialUser);

  const { nome, email, telefone, empresa, mensagem } = userInfo;

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]:value });
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    
    const errorMsg = valid(nome, email, telefone, empresa, mensagem);
    if (errorMsg) return dispatch({ type: 'NOTIFY', payload: { error: true, header: errorMsg.header, msg: errorMsg.msg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    const data = { ...userInfo, assunto: props.assunto }
    
    const res = await postData('sendMail', data);
    if (res.error) return dispatch({ type: 'NOTIFY', payload: { error: true, loading: false, header: res.header, msg: res.msg } });
    
    ReactGA.event({
      category: 'Formulário',
      action: `Contato - ${props.formSource}`,
    })
    return dispatch({ type: 'NOTIFY', payload: { success: true, loading: false, header: res.header, msg: res.msg } });

  }

  return (
    <form onSubmit={formSubmitHandler}>
      <section id="form" className={props.className}>
        <h2>{props.h2}</h2>

        <div className="form">

          <div className="form-input">
            <label htmlFor="nome">Nome: </label>
            <input onChange={inputChangeHandler} type="text" id="nome" name="nome" value={nome} placeholder="Seu primeiro nome"></input>
          </div>

          <div className="form-input">
            <label htmlFor="email">E-mail: </label>
            <input onChange={inputChangeHandler} type="text" id="email" name="email" value={email} placeholder="E-mail"></input>
          </div>

          <div className="form-input">
            <label htmlFor="telefone">Telefone: </label>
            {/* <input onChange={inputChangeHandler} type="tel" id="telefone" name="telefone" value={telefone} placeholder="Seu telefone"></input> */}
            <Cleave onChange={inputChangeHandler} id="telefone" name="telefone" value={telefone} placeholder="Seu telefone" options={{phone: true, phoneRegionCode: 'BR'}}></Cleave>
          </div>

          <div className="form-input">
            <label htmlFor="empresa">Empresa: </label>
            <input onChange={inputChangeHandler} type="text" id="empresa" name="empresa" value={empresa} placeholder="Nome da sua empresa (opcional)"></input>
          </div>

          <div className="form-input">
            <label htmlFor="message">Mensagem: </label>
            <textarea onChange={inputChangeHandler} placeholder="Digite aqui a sua mensagem" name="mensagem" value={mensagem} id="message" cols="30" rows="10"></textarea>
          </div>

          <div>
            <p>Estaremos respondendo no seu e-mail!</p>
          </div>

          <div className="form-input">
            <button type="submit" className="button">
              Enviar mensagem
            </button>
          </div>
        </div>

      </section>
    </form>
  )
}