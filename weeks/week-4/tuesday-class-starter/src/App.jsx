import { Example } from "./components/Example";
import { ExampleOne } from "./components/ExampleOne";
import { ExampleTwo } from "./components/ExampleTwo";
import { ExampleThree } from "./components/ExampleThree";
import { Distributive } from "./components/Twitter/Distributive";

export const App = () => {
  return (
    <>
      <h1>Learning the useEffect() Hook in react</h1>
      <div className="card">
        {/* <Example /> */}
        {/* <ExampleOne /> */}
        {/* <ExampleTwo /> */}
        {/* <ExampleThree /> */}
        <Distributive />
      </div>
    </>
  );
};
