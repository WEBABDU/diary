import React, { useContext } from "react";
import { ModalContext } from "../context/modal/modalContext";
import { NotesContext } from "../context/notes/notesContext";
import Note from "./Note";
import Modal from "./utilities/Modal";

const Content = () => {
  const { notes, filterNoteText, filterNoteWithSelectText } = useContext(NotesContext);
  const { active, showModal } = useContext(ModalContext);
 
  return (
    <>
      <div className="content">
        {notes.length ? (
          notes
            .filter((n) => n.subtitle.includes(filterNoteText) || n.selectText.includes(filterNoteWithSelectText))
            .map((note) => (
              <Note
                key={note.id}
                subtitle={note.subtitle}
                date={note.date}
                selectText={note.selectText}
                description={note.description}
                photo={note.photo}
                active={active}
                showModal={showModal}
              />
            ))
        ) : (
          <h4 className='content-none'>Пока у вас нет записов!</h4>
        )}
      </div>
      <Modal active={active} showModal={showModal} />
    </>
  );
};

export default Content;
