import { DataContext } from '../store/GlobalState';
import { useContext } from 'react';

function Toast(props) {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  return (
    <>
      {notify.type === 'error' ? (
        <div className="card-top card-top-error">
          {props.children}
        </div> ) :
      notify.type === 'success' ? (
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