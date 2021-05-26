import React, { useContext } from "react";
import { ModalContext } from "../../context/modal/modalContext";
import close from "../../assets/close.png";

const Modal = ({ showModal, active }) => {
  const { modalInfo } = useContext(ModalContext);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => showModal(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {modalInfo ? (
          <>
            <img
              onClick={() => showModal(false)}
              src={close}
              className="close"
              alt="close"
            />
            <div className="modal-subtitle">
              <div className="modal-subtitle-df">
                <p className="modal-text-emodji">{modalInfo.selectText}</p>
                <h3 className="modal-text-subtitle">
                  {modalInfo.subtitle[0].toUpperCase() +
                    modalInfo.subtitle.substr(1)}
                </h3>
              </div>

              <span className="modal-date">{modalInfo.date}</span>
            </div>
            <div className="modal-description">
              <div className='modal-img'>
                <img src={modalInfo.photo} alt="modalPhoto" />
              </div>
              <p className="modal-description-text">{modalInfo.description}</p>
            </div>
          </>
        ) : (
          "....."
        )}
      </div>
    </div>
  );
};

export default Modal;
