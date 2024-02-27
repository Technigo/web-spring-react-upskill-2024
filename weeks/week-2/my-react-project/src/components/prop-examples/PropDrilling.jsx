import { ComponentA } from "./prop-drilling/ComponentA";

export const PropDrilling = ({ stringProperty }) => {
  return (
    <>
      <ComponentA myCoolStringA={stringProperty} />
    </>
  );
};
