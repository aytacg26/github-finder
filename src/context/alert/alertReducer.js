import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alert: payload,
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };

    default:
      return state;
  }
};

export default AlertReducer;
