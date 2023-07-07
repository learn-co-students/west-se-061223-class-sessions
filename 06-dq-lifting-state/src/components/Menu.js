import React from "react";

function Menu({ darkMode, onToggleDarkMode}) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          onChange={onToggleDarkMode}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
