import React from "react";
import "./Header.css";

function Header({ setCurrentView }) {
  return (
    <div className="header">
      <nav>
        <ol>
          <li onClick={() => setCurrentView("completed")}>Concluidos</li>
          <li onClick={() => setCurrentView("active")}>Lista de Tarefas</li>
          <li onClick={() => setCurrentView("removed")}>Removidas</li>
        </ol>
      </nav>
    </div>
  );
}

export default Header;
