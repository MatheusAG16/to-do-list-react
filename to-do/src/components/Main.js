import React from "react";
import TaskList from "./TaskList";
import { useEffect } from "react";
import "./Main.css";

function Main({
  currentView,
  tasks,
  setTasks,
  removedTasks,
  setRemovedTasks,
  completedTasks,
  setCompletedTasks,
}) {
  useEffect(() => {
    console.log("Current view in App:", currentView);
  }, [currentView]);

  return (
    <div className="main">
      {currentView === "active" && (
        <TaskList
          title="Tarefas Ativas"
          tasks={tasks}
          setTasks={setTasks}
          removedTasks={removedTasks}
          setRemovedTasks={setRemovedTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      )}
      {currentView === "completed" && <TaskList title="Tarefas Concluídas" />}
      {currentView === "removed" && <TaskList title="Tarefas Removidas" />}
    </div>
  );
}

export default Main;
