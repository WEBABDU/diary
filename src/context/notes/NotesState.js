import React, { useReducer } from "react";
import { PhotosAPI } from "../../api/api";
import {
  ADD_NOTE,
  ADD_PHOTO,
  FILTER_NOTE,
  FILTER_SELECT_NOTE,
  MARK_PHOTO,
  SET_SEARCH_TEXT,
  SHOW_LOADER,
  UN_MARK_PHOTO,
} from "../types";
import { NotesContext } from "./notesContext";

import { notesReducer } from "./notesReducer";

export const NotesState = ({ children }) => {
  const initialState = {
    notes: [],
    notePhotos: [],
    searchText: "",
    loading: false,
    filterNoteText: "",
    filterNoteWithSelectText: "",
  };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  const addNote = async (subtitle, description, selectText, photo, date) => {
    const note = {
      id: date + Math.floor(Math.random() * 1000),
      subtitle,
      description,
      selectText,
      photo,
      date,
    };

    dispatch({
      type: ADD_NOTE,
      note,
    });
  };

  const showLoader = (status) => {
    dispatch({
      type: SHOW_LOADER,
      status,
    });
  };

  const getPhotos = async (text) => {
    showLoader(true);
    const response = await PhotosAPI.getPhotos(text);

    showLoader(false);
    const payload = Object.keys(response.data.photos).map((key) => ({
      ...response.data.photos[key],
      marked: false,
    }));

    dispatch({
      type: ADD_PHOTO,
      payload,
    });
  };

  const setSearchText = (text) => {
    dispatch({
      type: SET_SEARCH_TEXT,
      text,
    });
  };
  const markPhoto = (photoId) => {
    dispatch({
      type: MARK_PHOTO,
      photoId,
    });
  };
  const unMarkPhoto = (photoId) => {
    dispatch({
      type: UN_MARK_PHOTO,
      photoId,
    });
  };

  const filterNote = (text) => {
    dispatch({
      type: FILTER_NOTE,
      text,
    });
  };
  const filterNoteSelect = (selectText) => {
    dispatch({
      type: FILTER_SELECT_NOTE,
      selectText,
    });
  };

  return (
    <NotesContext.Provider
      value={{
        markPhoto,
        addNote,
        getPhotos,
        setSearchText,
        unMarkPhoto,
        filterNote,
        filterNoteSelect,
        notes: state.notes,
        photos: state.notePhotos,
        marked: state.notePhotos.marked,
        searchText: state.searchText,
        loading: state.loading,
        filterNoteText: state.filterNoteText,
        filterNoteWithSelectText: state.filterNoteWithSelectText,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
