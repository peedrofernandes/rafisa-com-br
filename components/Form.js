import { DataContext } from "../store/GlobalState";
import { useContext, useState } from 'react';
import { NOTIFY } from '../store/Actions';
import valid from "../utils/valid";
import { postData } from "../utils/fetchData";

export default function Form(props) {

  const initialState = { type: '', header: '', msg: '' };

  const initialUser = { nome: '', email: '', telefone: '', empresa: '', mensagem: '' }

  const { state, dispatch } = useContext(DataContext);

  const [userInfo, setUserInfo] = useState(initialUser);

  const { nome, email, telefone, empresa, mensagem } = userInfo;

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    dispatch({
      type: NOTIFY,
      payload: initialState
    });
  }

  const formSubmitHandler = async (e) => {  
    e.preventDefault();

    const errorMsg = valid(nome, email, telefone, empresa, mensagem);
    if (errorMsg) return dispatch({ type: NOTIFY, payload: errorMsg });

    const data = { ...userInfo, assunto: props.assunto }
    
    const res = await postData('sendMail', data);
    if (res.error) return dispatch({ type: NOTIFY, payload: { type: 'error', header: res.header, msg: res.msg } });
    
    return dispatch({ type: NOTIFY, payload: { type: 'success', header: res.header, msg: res.msg } });
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <section id="form" className={props.className}>
        <h2>{props.h2}</h2>

        <div className="form">

          <div className="form-input">
            <label htmlFor="nome">Nome: </label>
            <input onChange={inputChangeHandler} type="text" id="nome" name="nome" placeholder="Seu primeiro nome"></input>
          </div>

          <div className="form-input">
            <label htmlFor="email">E-mail: </label>
            <input onChange={inputChangeHandler} type="email" id="email" name="email" placeholder="E-mail"></input>
          </div>

          <div className="form-input">
            <label htmlFor="telefone">Telefone: </label>
            <input onChange={inputChangeHandler} type="tel" id="telefone" name="telefone" placeholder="Seu telefone"></input>
          </div>

          <div className="form-input">
            <label htmlFor="empresa">Empresa: </label>
            <input onChange={inputChangeHandler} type="text" id="empresa" name="empresa" placeholder="Nome da sua empresa (opcional)"></input>
          </div>

          <div className="form-input">
            <label htmlFor="message">Mensagem: </label>
            <textarea onChange={inputChangeHandler} placeholder="Digite aqui a sua mensagem" name="mensagem" id="message" cols="30" rows="10"></textarea>
          </div>

          <div>
            <p>Estaremos respondendo no seu e-mail!</p>
          </div>

          <div className="form-input">
            <input type="submit" className="button" value="Enviar mensagem">
              {/* <button className="button">Enviar mensagem</button> */}
            </input>
          </div>
        </div>

      </section>
    </form>
  )
}