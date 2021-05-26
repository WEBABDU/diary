import React, { useReducer } from "react";
import { SET_MODAL_INFO, SHOW_MODAL } from "../types";
import { ModalContext } from "./modalContext";
import { modalReducer } from "./modalReducer";

export const ModalState = ({ children }) => {
  const initialState = {
    active: false,
    modalInfo: null
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);
  

  const showModal = (active) => {
    dispatch({
      type: SHOW_MODAL,
      active,
    });
  };

  const setModalInfo = (subtitle, description, selectText, photo, date) => {
    const payload = {
        subtitle,
        description,
        selectText,
        photo,
        date,
      };
  
      dispatch({
        type: SET_MODAL_INFO,
        payload,
      });
  }


  return (
    <ModalContext.Provider
      value={{
        showModal,
        setModalInfo,
        active: state.active,
        modalInfo: state.modalInfo
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
