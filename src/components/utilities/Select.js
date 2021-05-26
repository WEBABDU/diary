import React from "react";

const Select = ({ selectText, setSelectText, children }) => {
  
  return (
    <div className="select-wrapper">
      {children}
    </div>
  );
};

export default Select;

