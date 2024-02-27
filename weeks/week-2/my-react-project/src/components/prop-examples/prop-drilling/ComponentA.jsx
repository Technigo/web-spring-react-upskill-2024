import { ComponentB } from "./ComponentB";

export const ComponentA = ({ myCoolStringA }) => {
  return (
    <>
      <ComponentB myCoolStringB={myCoolStringA} />
    </>
  );
};
