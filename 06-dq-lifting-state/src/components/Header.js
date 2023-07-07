import React, { useState } from "react";
import Menu from "./Menu";

function Header({darkMode, onToggleDarkMode}) {

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} onToggleDarkMode={onToggleDarkMode}/>
      </div>
    </div>
  );
}

export default Header;
