import { createContext, useReducer, useEffect } from 'react';
import Reducers from './Reducers';

export const DataContext = createContext();

const DataProvider = (props) => {

  const initialState = {

    userInfo: {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      mensagem: ''
    },

    notify: {
      type: '',
      header: '',
      msg: ''
    },

  };
  
  const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider;