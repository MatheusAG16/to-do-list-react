import React from "react";
import "./Header.css";

function Header({ setCurrentView }) {
  return (
    <div className="header">
      <nav>
        <ol>
          <li onClick={() => setCurrentView("completed")} id={"verde"}>
            Concluidos
          </li>
          <li onClick={() => setCurrentView("active")} id={"roxo"}>
            Lista de Tarefas
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Header;
