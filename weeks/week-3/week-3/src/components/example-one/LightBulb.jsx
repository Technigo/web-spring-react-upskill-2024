import { useState } from "react";
import "./index.css";

export const LightBulb = () => {
  // Initialize the state for on/off
  const [on, setOn] = useState(false);
  // Create function to toggle the state frpom the on useState boolean value
  const toggleLight = () => {
    // 1 - Toggle the on/off state
    setOn(!on);
    // 1 - Another way usig callbacks - This approach although it works, its mor lengthy
    // setOn((previousStateRecived) => !previousStateRecived);
  };

  return (
    <>
      <p>{on.toString()}</p>
      <div className="lightbulb-container">
        <div onClick={toggleLight} className={`lightbulb ${on ? "on" : "off"}`}>
          <div className="bulb"></div>
        </div>
      </div>
    </>
  );
};
