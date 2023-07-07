import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function onToggleDarkMode(e){
    console.log(e.target.checked)
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <DarkModeWrapper darkMode={darkMode} >
      <Header darkMode={darkMode} onToggleDarkMode={onToggleDarkMode}/>
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
