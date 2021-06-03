import { DataContext } from '../store/GlobalState';
import { useContext, useEffect } from 'react';
import Toast from './Toast';


export default function Notify() {

  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  const { header, msg } = notify;

  return (
    <Toast>
      <div className="close">
        <label htmlFor="close2">
          <img id="close-btn" src="/assets/icons/cancel (1).svg"></img>
        </label>
      </div>

      <div className="card-top-content">
        <div>
          <h3>{header}</h3>
        </div>
        <div>
          <p>{msg}</p>
        </div>
      </div>
    </Toast>
  )
}