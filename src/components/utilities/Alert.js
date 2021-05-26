import React, { useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";

const Alert = () => {
  const { alert, hideAlert } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type}`}>
      <span onClick={hideAlert} className="closebtn">
        &times;
      </span>
      <strong>Внимания!</strong> {" " + alert.text}
    </div>
  );
};

export default Alert;
