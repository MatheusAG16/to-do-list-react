import React from "react";
import Task from "./Task";
import "./TaskList.css";

function TaskList({ currentList, removeTask, completeTask, currentView }) {
  return (
    <ul className="taskList">
      {currentList.map((text, index) => {
        return (
          <Task
            key={index}
            index={index}
            text={text}
            removeTask={removeTask}
            completeTask={completeTask}
            currentView={currentView}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
