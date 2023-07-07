import React from "react";

function DarkModeWrapper(props) {
  console.log("🚀 ~ file: DarkModeWrapper.js:4 ~ DarkModeWrapper ~ props:", props)
  return (
    <div id="wrapper" className={props.darkMode ? "dark-mode" : ""}>
      {props.children}
    </div>
  );
}

export default DarkModeWrapper;
