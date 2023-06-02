import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./LoginForm";
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <div className="navbar">
        <h3>Login</h3>
        {/* <button
          class="theme-toggle"
          id="theme-toggle"
          title="Toggles light & dark"
          aria-label="auto"
          aria-live="polite"
          onClick={toggleTheme}
        >
          toggle
  </button> */}
        <div class="toggle">
          <input type="checkbox" id="toggle" onClick={toggleTheme} />
          <label for="toggle"></label>
        </div>
      </div>
      <Container />
    </div>
  );
}
export default App;
