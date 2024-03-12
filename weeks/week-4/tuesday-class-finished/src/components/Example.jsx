import { useEffect, useState } from "react";

export const Example = () => {
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //STRUCTURE TO FOLLOW
  // Sturcture of useEffect Hook
  // useEffect(() => {})
  // useEffect(() => {}, [])

  // Example 1: Runs on every render
  //   useEffect(() => {
  //     console.log("i have been re-rendered");
  //   });

  // Explanation:   Without dependencies, useEffect runs after every render. This is useful when you want to execute a side effect every time the component updates.

  // -----------------
  // -----------------
  // -----------------

  // // Example 2: Runs once after the initial render
  // Same as componentDidMount Alternative'
  // Has dependency array
  // Basically it tells react to run once the component did mount

  useEffect(() => {
    console.log(" ---- ONLY RUNNING ONCE [] ARRAY IN SETUP");
  }, []);

  // Explanation: With an empty dependency array [], useEffect runs once after the initial render, mimicking componentDidMount. This is useful for one-time setups like fetching data.

  // -----------------
  // -----------------
  // -----------------

  // Example 3: Runs after the initial render and when specified dependencies change
  // It runs on the first render + whenever a dependency changes - 'same as componentDidUpdate Alternative'
  // Look at removing the dependency and see the warning on the console
  useEffect(() => {
    console.log(`The name has been change ${name}`);
  }, [name]);

  // Explanation:  When dependencies [name] are specified, useEffect runs after the initial render and whenever the specified dependencies change, similar to componentDidUpdate. This is useful to handle side effects related to certain state/props changes.

  // Example 4: Runs once after the initial render and has a cleanup function
  // It runs on the first render + cleanup function- 'same as componentDidMount Alternative'
  // Has dependency array
  // Basically it tells react to run once the component did mount

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

  // Explanation: example, an empty dependency array [] indicates that the side-effect logic will only execute once after the initial render, mimicking the componentDidMount lifecycle method in class components. Upon execution, a message "Attach Listener" is logged to the console, and an event listener for window resizing is established, invoking the updateWindowWidth function whenever a resize event occurs. This function, updateWindowWidth, updates the component’s state, windowWidth, with the current inner width of the window, potentially triggering a re-render. Crucially, a cleanup function is provided, which logs "Detach Listener" to the console and removes the previously set event listener. This cleanup function will be invoked when the component is unmounted from the DOM, ensuring that the event listener is removed to prevent memory leaks and avoid unnecessary operations when the component is no longer present in the UI. This pattern demonstrates a practical application of useEffect to manage side-effects and their cleanup in a React functional component.

  // -----------------
  // -----------------
  // -----------------

  return (
    <div>
      <h3>Example of useEffect Hook</h3>
      <p>The window width size is currently: {windowWidth}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>The name is: {name}</p>
    </div>
  );
};
