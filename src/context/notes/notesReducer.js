import {
  ADD_NOTE,
  MARK_PHOTO,
  ADD_PHOTO,
  SET_SEARCH_TEXT,
  SHOW_LOADER,
  UN_MARK_PHOTO,
  FILTER_NOTE,
  FILTER_SELECT_NOTE,
} from "../types";

export const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.note],
      };
    case ADD_PHOTO:
      return {
        ...state,
        notePhotos: action.payload,
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: action.status,
      };
    case MARK_PHOTO:
      return {
        ...state,
        notePhotos: state.notePhotos.map((p) => {
          if (p.id === action.photoId) {
            return { ...p, marked: !p.marked };
          }
          return p;
        }),
      };
    case UN_MARK_PHOTO:
      return {
        ...state,
        notePhotos: state.notePhotos.map((p) => {
          if (p.id === action.photoId) {
            return { ...p, marked: false };
          }
          return p;
        }),
      };
      case FILTER_NOTE:
        return {
          ...state,
          filterNoteText: action.text
        }
      case FILTER_SELECT_NOTE:
        return {
          ...state,
          filterNoteWithSelectText: action.selectText
        }

    default:
      return state;
  }
};

// const handlers = {
//   [MARK_PHOTO]: (state) => ({ ...state, marked: true }),
//   [UN_MARK_PHOTO]: (state) => ({ ...state, marked: false }),
//   [ADD_NOTE]: (state, { payload }) => ({
//     state,
//     notes: [...state.notes, payload],
//   }),
//   DEFAULT: (state) => state,
// };

// export const pexelsReducer = (state, action) => {
//     const handle = handlers[action.type] || handlers.DEFAULT
//     return handle(state, action);
// }
