import { StaticComponent } from "./components/StaticComponent";
import { SelfContainedComp } from "./components/selfContainedComponent/SelfContainedComp";

import { MyFirstComponent } from "./components/MyFirstComponent";

export const App = () => {
  return (
    <>
      {/* <StaticComponent /> */}
      {/* <SelfContainedComp /> */}
      <MyFirstComponent />
    </>
  );
};
