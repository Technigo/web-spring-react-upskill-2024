import { useState } from "react";

export const LightBulbString = ({ count }) => {
  // Initialize our data
  const [usingAString, setUsingAString] = useState("off");

  // function to chzange string value
  const toggleStringValue = () => {
    setUsingAString((previousStateValue) =>
      previousStateValue === "off" ? "on" : "off"
    );
  };

  return (
    <>
      <p>
        using a string instead of a boolean - {usingAString} -- {count}
      </p>
      <div className="lightbulb-container">
        <div
          onClick={toggleStringValue}
          className={`lightbulb ${usingAString}`}
        >
          <div className="bulb"></div>
        </div>
      </div>
    </>
  );
};
