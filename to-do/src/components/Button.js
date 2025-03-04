import React from "react";
import "./Button.css";

function Button({ value, onClick }) {
  return (
    <button className="btn-principal" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
