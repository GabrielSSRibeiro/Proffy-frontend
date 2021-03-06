import React from "react";

import "./styles.css";

function Textarea({ name, label, ...rest }) {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea type="text" id={name} {...rest} />
    </div>
  );
}

export default Textarea;
