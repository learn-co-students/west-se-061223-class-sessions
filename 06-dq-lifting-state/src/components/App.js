import React from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  return (
    <DarkModeWrapper darkMode={false}>
      <Header />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
