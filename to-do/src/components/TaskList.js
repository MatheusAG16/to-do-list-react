import React from "react";
import { useState } from "react";
import InputTask from "./InputTask";
// import Main from "./Main";
import Task from "./Task";

function TaskList({
  title,
  tasks,
  setTasks,
  removedTasks,
  setRemovedTasks,
  completedTasks,
  setCompletedTasks,
}) {
  const addTask = (text) => {
    setTasks([...tasks, text]);
  };

  const removeTask = (taskKey) => {
    let copyTasks = [...tasks];
    let removedTask = copyTasks.splice(taskKey, 1);

    let copyRemovedTasks = [...removedTasks];
    copyRemovedTasks.push(removedTask[0]);

    setRemovedTasks(copyRemovedTasks);
    setTasks(copyTasks);
  };

  const concludeTask = (currentView) => {
    console.log(`testando função ` + currentView);
  };
  return (
    <>
      <h1>{title}</h1>
      {<InputTask addTask={addTask} />}
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task}
          taskKey={index}
          removeTask={removeTask}
          concludeTask={concludeTask}
        />
      ))}
    </>
  );
}

export default TaskList;
