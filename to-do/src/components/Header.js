import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <ol>
          <li>Home</li>
          <li>Concluidos</li>
          <li>Lista de Tarefas</li>
          <li>Entrar</li>
        </ol>
      </nav>
    </div>
  );
}

export default Header;
