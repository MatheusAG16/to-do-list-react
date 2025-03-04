import React from "react";
import { useState } from "react";
import Button from "./Button";
import "./InputTask.css";

function InputTask({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChage = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  const teste = () => {
    console.log("Teste");
  };

  return (
    <div className="input-task">
      <input
        type="text"
        name="n-input-task"
        id="i-input-task"
        placeholder="Digite sua tarefa"
        onChange={handleInputChage}
      />
      <Button value="+" onClick={handleAddTask} />
      <Button value="-" onClick={teste} />
    </div>
  );
}

export default InputTask;
