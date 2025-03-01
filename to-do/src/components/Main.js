import React from "react";
import Button from "./Button";
import InputTask from "./InputTask";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>
      <InputTask />
    </div>
  );
}

export default Main;
