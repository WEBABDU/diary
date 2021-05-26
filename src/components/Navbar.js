import React, { useContext } from "react";
import logo from "./../assets/logo.png";
import noteIcon from "./../assets/notes_icon.png";
import pen from "../assets/pen.png";
import { NavLink } from "react-router-dom";
import Select from "./utilities/Select";
import { NotesContext } from "../context/notes/notesContext";

const Navbar = (props) => {
  let display = "flex";
  let justify = "space-around";
  if (props.location.pathname === "/add") {
    display = "none";
    justify = "space-between";
  }
  const {
    filterNoteText,
    filterNoteSelect,
    filterNoteWithSelectText,
    filterNote,
  } = useContext(NotesContext);

  const onFilterNote = (e) => {
    filterNote(e.target.value);
  };
  const onFilterNoteSelect = (e) => {
    filterNoteSelect(e.target.value);
  };

  console.log(props.location.pathname);
  return (
    <>
      <nav className="nav" style={{ justifyContent: justify }}>
        <img src={logo} alt="logo" />

        <div className="search" style={{ display: display }}>
          <input
            onChange={onFilterNote}
            value={filterNoteText}
            placeholder="Поиск"
            className="feed-search"
            type="text"
          />

          <Select>
            <select
              className="feed-select"
              name=""
              id=""
              style={{ margin: "0 35px 0 14px" }}
              onChange={onFilterNoteSelect}
              value={filterNoteWithSelectText}
            >
              <option value="😀">&#128512;</option>
              <option value="😊">&#128522;</option>
              <option value="😃">&#128515;</option>
              <option value="🙂">&#128578;</option>
              <option value="😍">&#128525;</option>
              <option value="😒">&#128530;</option>
              <option value="😔">&#128532;</option>
              <option value="🤕">&#129301;</option>
              <option value="🤧">&#129319;</option>
              <option value="😟">&#128543;</option>
              <option value="🤐">&#129296;</option>
              <option value="😏">&#128527;</option>
              <option value="😒">&#128530;</option>
              <option value="😷">&#128567;</option>
              <option value="😈">&#128520;</option>
              <option value="😎">&#128526;</option>
            </select>
          </Select>
        </div>

        <div className="right-feed">
          <div className="all-notes">
            <NavLink to="/content">
              <span className="all-img">
                <img src={noteIcon} alt="all-notes-logo" />
              </span>
              <span className="all-button-text">Список</span>
            </NavLink>
          </div>

          <div className="add-note">
            <NavLink to="/add">
              <span className="add-img">
                <img src={pen} alt="logo-note" />
              </span>
              <span className="add-note-button-text">Запись</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
