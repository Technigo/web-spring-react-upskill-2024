import React, { useState } from "react";

export const DataExampleDestructured = () => {
  // Primitive Data Types
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Arrays
  const [items, setItems] = useState([]);

  // Objects
  const [user, setUser] = useState({ name: "", age: 0 });

  // Complex Data Structures
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ]);

  // Functions
  const [callback, setCallback] = useState(() =>
    console.log("Default function")
  );

  // Function to handle incrementing count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to handle appending text
  const appendText = () => {
    setText(text + " Hello");
  };

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Function to add new item to items array
  const addItem = () => {
    setItems([...items, "New Item"]);
  };

  // Function to update user's name to "John"
  const setNameToJohn = () => {
    setUser({ ...user, name: "John" });
  };

  // Function to update user's age to 30
  const setAgeTo30 = () => {
    setUser({ ...user, age: 30 });
  };

  // Function to add new user to users array
  const addUserCharlie = () => {
    setUsers([...users, { name: "Charlie", age: 35 }]);
  };

  // Function to update callback
  const updateCallback = () => {
    setCallback(() => console.log("Updated function"));
  };

  return (
    <div>
      {/* Number */}
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>

      {/* String */}
      <div>
        <p>Text: {text}</p>
        <button onClick={appendText}>Append "Hello"</button>
      </div>

      {/* Boolean */}
      <div>
        <p>Visibility: {isVisible ? "Visible" : "Not Visible"}</p>
        <button onClick={toggleVisibility}>Toggle Visibility</button>
      </div>

      {/* Arrays */}
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Objects */}
      <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={setNameToJohn}>Set Name to "John"</button>
        <button onClick={setAgeTo30}>Set Age to 30</button>
      </div>

      {/* Complex Data Structures */}
      <div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={addUserCharlie}>Add User "Charlie"</button>
      </div>

      {/* Functions */}
      <div>
        <button onClick={updateCallback}>Update Callback</button>
      </div>
    </div>
  );
};
