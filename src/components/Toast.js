import { DataContext } from '../store/GlobalState';
import { useContext } from 'react';

function Toast(props) {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  let animationValue = "Carregando";

  const loading = (e) => {
    const div = e.target;
    const h3 = div.children[0].children[0];
    setInterval(() => {
      if (h3.innerHTML === "Carregando") {
        h3.innerHTML = "Carregando.";
      } else if (h3.innerHTML === "Carregando.") {
        h3.innerHTML = "Carregando..";
      } else if (h3.innerHTML === "Carregando..") {
        h3.innerHTML = "Carregando...";
      } else if (h3.innerHTML === "Carregando...") {
        h3.innerHTML = "Carregando";
      }
    }, 250)
  }

  return (
    <>
      {notify.loading ? (

        <div onAnimationStart={loading} className="card-top card-top-loading">
          <div className="card-top-content">
            <h3>{animationValue}</h3>
          </div>
        </div>
        
      ) : notify.error ? (
        <div className="card-top card-top-error">
          {props.children}
        </div> ) :
      notify.success ? (
        <div className="card-top card-top-success">
          {props.children}
        </div>
      ) : (
        <div className="card-top card-top-dnone">
          {props.children}
        </div>
      )}
    </>
  )
}

export default Toast;