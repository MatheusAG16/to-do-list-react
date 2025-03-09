import React from "react";
import "./Task.css";

function Task({ index, text, completeTask, removeTask, currentView }) {
  const handleRemoveTask = () => {
    removeTask(index);
  };

  const handleCompleteTask = () => {
    completeTask(index);
  };

  return (
    <li
      className={"task"}
      id={currentView === "active" ? "roxo" : "task-verde"}
    >
      {index} - {text}
      <div className={"btn__exclude__complete"}>
        <button className={"btn-task"} onClick={handleRemoveTask}>
          X
        </button>
        <button
          className={
            currentView === "active" ? "btn-task" : "btn-task btn-task-none"
          }
          onClick={handleCompleteTask}
        >
          C
        </button>
      </div>
    </li>
  );
}

export default Task;
