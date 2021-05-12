import React from "react";

import "./styles.css";

function Select({ name, label, options, ...rest }) {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" type="text" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
