import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
  const [currentView, setCurrentView] = useState("active");
  const [tasks, setTasks] = useState([]);
  const [removedTasks, setRemovedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Função para carregar tarefas do Local Storage
  const loadTasksFromLocalStorage = (key) => {
    const savedData = localStorage.getItem(key);
    console.log(`Carregando ${key}:`, savedData); // Adicionando log para depuração
    return savedData ? JSON.parse(savedData) : [];
  };

  // Carregar tarefas do Local Storage quando o componente for montado
  useEffect(() => {
    setTasks(loadTasksFromLocalStorage("tasks"));
    setRemovedTasks(loadTasksFromLocalStorage("removedTasks"));
    setCompletedTasks(loadTasksFromLocalStorage("completedTasks"));
  }, []);

  // Salvar tarefas no Local Storage sempre que o estado for atualizado
  useEffect(() => {
    console.log("Salvando tasks:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("removedTasks", JSON.stringify(removedTasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, removedTasks, completedTasks]);

  return (
    <div className="container">
      <Header setCurrentView={setCurrentView} currentView={currentView} />
      <Main
        currentView={currentView}
        tasks={tasks}
        setTasks={setTasks}
        removedTasks={removedTasks}
        setRemovedTasks={setRemovedTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
  );
}

export default App;
