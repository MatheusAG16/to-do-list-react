import React from "react";
import Button from "./Button";
import "./InputTask.css";

function InputTask() {
  return (
    <div className="input-task">
      <input
        type="text"
        name="n-input-task"
        id="i-input-task"
        placeholder="Digite sua tarefa"
      />
      <Button value="+" />
      <Button value="-" />
    </div>
  );
}

export default InputTask;
