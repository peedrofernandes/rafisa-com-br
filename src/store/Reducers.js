import { ACTIONS } from './Actions';

const Reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      }
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload
      }
    default:
      return state;
  }
}

export default Reducers;