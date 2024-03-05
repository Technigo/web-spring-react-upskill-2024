import { useState, useEffect } from "react";
import { DataExample } from "./components/data/DataExample";
import { LightBulb } from "./components/example-one/LightBulb";
import { LightBulbString } from "./components/example-one/LightBulbString";
import { ExampleTwo } from "./components/Example-two/ExampleTwo";

export const App = () => {
  const [count, setCount] = useState(30);
  return (
    <>
      <div className="card">
        <LightBulbString count={count} />
        {/* <ExampleTwo /> */}
      </div>
    </>
  );
};
