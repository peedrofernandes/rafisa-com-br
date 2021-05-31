import { DataContext } from '../store/GlobalState';
import { useContext } from 'react';


export default function Notify() {

  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  let type = '';
  let header = '';
  let msg = '';

  if (notify.type === 'success') {
    type = 'card-top-success';
    header = `${success.header}`;
    msg = `${success.msg}`
  } else if (notify.type === 'error') {
    type = 'card-top-error';
    header = `${error.header}`;
    msg = `${error.msg}`;
  } else {
    type = 'd-none';
  }


  return (
    <div>
      <input type="radio" name="closeCard" id="closeCard"></input>

      <div className={`card-top ${type}`}>

        <div className="card-top-content">
            
          <div>
            <label htmlFor="closeCard">
              <img className="close" src="assets/icons/cancel (1).svg"></img>
            </label>
          </div>
              
          <div>
            <h6>{header}</h6>
          </div>
              
          <div>
            <span>{msg}</span>
          </div>
            
        </div>

      </div>
    </div>
  )
}