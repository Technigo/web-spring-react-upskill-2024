import { useState, useEffect } from "react";
import { DataExample } from "./components/data/DataExample";
import { LightBulb } from "./components/example-one/LightBulb";
import { LightBulbString } from "./components/example-one/LightBulbString";
import { ExampleTwo } from "./components/Example-two/ExampleTwo";
import { MultiStepForm } from "./components/multiStep/MultiStepForm";

export const App = () => {
  return (
    <>
      <div className="card">
        {/* <LightBulbString /> */}
        {/* <ExampleTwo /> */}

        <MultiStepForm />
      </div>
    </>
  );
};
