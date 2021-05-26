import React, { useContext } from "react";
import { NotesContext } from "../context/notes/notesContext";
// import searchFound from "./../assets/search_found.png";

const Search = () => {
  const { setSearchText, searchText } = useContext(NotesContext);

  const onChangeSearchText = (e) =>{
    setSearchText(e.target.value)
    e.preventDefault()
  }
  return (
    <div>
      <input onChange={onChangeSearchText} placeholder='Поиск картинки' value={searchText}  type="text" className="right-search-input" />
      {/* <button className="searchFound">
        <img src={searchFound} alt="searchFound" />
      </button> */}
    </div>
  );
};

export default Search;
