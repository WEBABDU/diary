import { SHOW_MODAL, SET_MODAL_INFO } from "../types";
export const modalReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        active: action.active,
      };
    case SET_MODAL_INFO:
      return {
        ...state,
        modalInfo: action.payload
      }
    default:
      return state;
  }
};
