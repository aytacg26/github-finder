import React, { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const handleAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });

    const timer = setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
      clearTimeout(timer);
    }, 4000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, handleAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
