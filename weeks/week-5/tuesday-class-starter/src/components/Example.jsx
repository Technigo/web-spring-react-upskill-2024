import { useEffect, useState } from "react";

export const Example = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(10);

  const onClick = () => {
    setCount(count + 1);
  };
  const onClickTwo = () => {
    setCountTwo(countTwo + 1);
  };

  console.log(window.innerWidth);

  //STRUCTURE TO FOLLOW
  // Sturcture of useEffect Hook

  // BIG NO No
  // NEVER place hook inside of a variable
  //const usehook = useEffect()

  // First Structure
  // Eithou any dependency array
  //useEffect(() => {});

  // Second Structure
  // Has a depedency array
  // useEffect(() => {}, []);

  // Example 1: Runs on every render
  useEffect(() => {
    console.log("i have been re-rendered");
  });

  // Example 2: Runs only once on first initial render that empty-depdency is added
  useEffect(() => {
    console.log("i have been rendered once - empty dependency");
  }, []);

  // Example 3: Runs on every render that empty-depdency is added
  useEffect(() => {
    console.log("i have been rendered once the dependency has been updated");
  }, [countTwo]);

  // Example 4:
  useEffect(() => {
    console.log("i have been rendered once the dependency has been updated");
  }, [countTwo, count]);
  // Explanation:   Without dependencies, useEffect runs after every render. This is useful when you want to execute a side effect every time the component updates.

  // Window Example
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log("Attach Listener");
    window.addEventListener("resize", updateWindowWidth);

    // cleanup within the useState hook is basically a return within the useEffect callback function
    return () => {
      console.log("Dettach Listener");
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div>
      <p>The window width size is currently: {windowWidth}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>The name is: {name}</p>
      <button onClick={onClick}>{count}</button>
      <button onClick={onClickTwo}>{countTwo}</button>
    </div>
  );
};
