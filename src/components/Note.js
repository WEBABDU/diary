import React, { useContext } from "react";
import { ModalContext } from "../context/modal/modalContext";

const Note = ({
  subtitle,
  date,
  description,
  selectText,
  photo,
  showModal,
}) => {
  const { setModalInfo } = useContext(ModalContext);

  const OnModal = () => {
    setModalInfo(subtitle, description, selectText, photo, date);
    showModal(true);
  };

  return (
    <div className="note" onClick={OnModal}>
      <img src={photo} alt="img" />
      <div className="note-description">
        <div className="sub-date">
          <h4 className="note-sub-text">
            {subtitle}
          </h4>
          <p className="note-date-text">{date}</p>
        </div>
        <div>
          <p className="note-description-text">{description.substr(0, 100) + "..."}</p>
        </div>
      </div>
      <div className="emodji">
        <p>{selectText}</p>
      </div>
    </div>
  );
};

export default Note;
