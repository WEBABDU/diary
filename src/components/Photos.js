import React, { useContext, useEffect } from "react";
import { NotesContext } from "../context/notes/notesContext";
import search from "../assets/Search.gif";

const Photos = ({ setPhoto }) => {
  const { getPhotos, photos, searchText, loading, markPhoto } =
    useContext(NotesContext);

  useEffect(() => {
    getPhotos(searchText);
    // eslint-disable-next-line
  }, [searchText]);

  const onMarked = (photoId) => {
    markPhoto(photoId);
    const mark = photos.find((c) => c.id === photoId);
    setPhoto(mark.src.large);
  };



  return (
    <div className="images">
      {loading ? (
        <img src={search} alt="searchImg" />
      ) : (
        photos.map((el) => (
          <div className={el.marked ? " marked" : null} key={el.id}>
            <img onClick={() => onMarked(el.id)} src={el.src.tiny} alt="" />
          </div>
        ))
      )}
    </div>
  );
};

export default Photos;
