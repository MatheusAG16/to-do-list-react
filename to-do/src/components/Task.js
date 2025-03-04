import React from "react";
import "./Task.css";

function Task({ text, taskKey, concludeTask, removeTask }) {
  const handleRemoveTask = () => {
    removeTask(taskKey);
  };

  const handleConcludeTask = () => {
    concludeTask(taskKey);
  };

  return (
    <div className="task">
      {text}
      <div className="btn-flex">
        <button className="btn-task" onClick={handleRemoveTask}>
          X
        </button>
        <button className="btn-task" onClick={handleConcludeTask}>
          C
        </button>
      </div>
    </div>
  );
}

export default Task;
