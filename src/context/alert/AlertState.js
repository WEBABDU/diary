import React, { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";

export const AlertState = ({ children }) => {
  const intialState = { visible: false };
  const [state, dispatch] = useReducer(alertReducer, intialState);
  const showAlert = (type='', text) => {
    dispatch({
      type: SHOW_ALERT,
      payload:{type, text},
    });
  };
  const hideAlert = () => {
    dispatch({
      type: HIDE_ALERT,
    });
  };

  return (
    <AlertContext.Provider
      value={{ alert:state, showAlert, hideAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};
