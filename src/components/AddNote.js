import React, { useContext, useState } from "react";
import Select from "./utilities/Select";
import union from "./../assets/union.png";
import Photos from "./Photos";
import Search from "./Search";
import { NotesContext } from "../context/notes/notesContext";
import Alert from "./utilities/Alert";
import { AlertContext } from "../context/alert/alertContext";

const AddNote = (props) => {
  const { addNote, unMarkPhoto, photos } = useContext(NotesContext);
  const alert = useContext(AlertContext);
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [selectText, setSelectText] = useState("😀");

  const handler = () => {
    if (subtitle.trim() && photo && date && description) {
      addNote(
        subtitle[0].toUpperCase() + subtitle.substr(1).toLowerCase(),
        description,
        selectText,
        photo,
        date
      );
      setSubtitle("");
      setDescription("");
      setDate("");
      setSelectText("");
      const mark = photos.find((p) => p.marked === true);
      unMarkPhoto(mark.id);
      alert.showAlert("successfull", "Заметка успешно создана");
      setTimeout(() => {
        alert.hideAlert();
      }, 3000);
    } else {
      alert.showAlert("warning", "Введите все необходимые данные");
      setTimeout(() => {
        alert.hideAlert();
      }, 4000);
    }
  };

  return (
    <>
      <Alert />
      <div className="add-note-content">
        <div className="left-note-content">
          <div className="all-datails">
            <input
              onChange={(e) => setSubtitle(e.target.value)}
              value={subtitle}
              type="text"
              className="note-input-name"
              placeholder="Название"
            />
            <div className='select-with-date'>
              <Select
                selectText={selectText}
                setSelectText={setSelectText}
                value={selectText}
                margin="0px"
              >
                <select
                  value={selectText}
                  onChange={(e) => setSelectText(e.target.value)}
                  className="feed-select"
                  name=""
                  id=""
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
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                value={date}
                className="note-added-date"
                placeholder="Дата"
              />
            </div>
          </div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            className="description-input"
            placeholder="Описание"
          />{" "}
          <br />
        </div>
        <div className="right-note-content">
          <Search />
          <Photos setPhoto={setPhoto} />
          <button onClick={handler} className="create-note-button">
            <span>
              <img src={union} alt="" />
            </span>
            <span className="create-note-text">Создать</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
