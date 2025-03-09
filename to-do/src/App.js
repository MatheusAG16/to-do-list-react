import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
  const [currentView, setCurrentView] = useState("active");

  return (
    <div
      className={currentView === "active" ? "container" : "container completed"}
    >
      <Header setCurrentView={setCurrentView} />
      <Main currentView={currentView} />
    </div>
  );
}

export default App;
