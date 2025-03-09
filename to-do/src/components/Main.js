import React, { useEffect } from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import InputTask from "./InputTask";
import "./Main.css";

function Main({ currentView }) {
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const removeTask = (index) => {
    if (currentView === "active") {
      const copyTaskList = [...taskList];
      copyTaskList.splice(index, 1);
      setTaskList(copyTaskList);
    } else {
      const copyCompletedList = [...completedTaskList];
      copyCompletedList.splice(index, 1);
      setCompletedTaskList(copyCompletedList);
    }
  };

  const completeTask = (index) => {
    if (currentView === "active") {
      const copyTaskList = [...taskList];
      const completedTask = copyTaskList.splice(index, 1);
      setCompletedTaskList([...completedTaskList, completedTask[0]]);
      setTaskList(copyTaskList);
    }
  };

  const apagarTask = (index) => {
    console.log(index);
  };

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(
        "completedTaskList",
        JSON.stringify(completedTaskList)
      );
    }
  }, [completedTaskList, isInitialized]);

  useEffect(() => {
    const savedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
    const savedCompletedTaskList =
      JSON.parse(localStorage.getItem("completedTaskList")) || [];
    setTaskList(savedTaskList);
    setCompletedTaskList(savedCompletedTaskList);
    setIsInitialized(true);
  }, []);

  let currentList;
  switch (currentView) {
    case "active":
      currentList = taskList;
      break;
    case "completed":
      currentList = completedTaskList;
      break;
    default:
      console.log("Default");
  }

  return (
    <div className="main">
      <InputTask
        addTask={addTask}
        completedTaskList={completedTaskList}
        taskList={taskList}
      />
      <TaskList
        removeTask={removeTask}
        completeTask={completeTask}
        apagarTask={apagarTask}
        currentList={currentList}
        currentView={currentView}
      />
    </div>
  );
}

export default Main;
