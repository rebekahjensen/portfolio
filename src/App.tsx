import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";

import About from "./components/About";
import Leadership from "./components/Leadership";
import Values from "./components/Values";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((currentMode) =>
      currentMode === "dark" ? "light" : "dark"
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation
        parentToChild={{ mode }}
        modeChange={handleModeChange}
      />

      <FadeIn transitionDuration={700}>
        <Main />
        <About />
        <Expertise />
        <Timeline />
        <Project />
        <div className="leadership-values">
        <Leadership />
        <Values />
        </div>
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;