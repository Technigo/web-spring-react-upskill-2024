import { useState } from "react";
import "./styles.css";

export const ExampleTwo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <h2>Theme Switch Toggle</h2>
      <label className="toggle-switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <div
        className={`theme-label ${
          isDarkMode ? "theme-label-dark" : "theme-label-light"
        }`}
      >
        Current Theme: {isDarkMode ? "Dark" : "Light"}
      </div>
    </>
  );
};
