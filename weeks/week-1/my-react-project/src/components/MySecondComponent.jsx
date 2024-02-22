export const MySecondComponent = () => {
  // Different data types
  const dataTypesExample = {
    string: "Hello, world!",
    number: 42,
    boolean: true,
    array: ["apple", "banana", "orange"],
    object: { name: "John", age: 30 },
    nullValue: null,
    undefinedValue: undefined,
    functionValue: () => "This is a function",
    sayHello: () => {
      const userName = prompt("Please enter your name:");
      alert(`Hello, ${userName}!`);
    },
  };

  // Variable containing information about food
  const foodInfo = {
    name: "Pizza",
    type: "Italian",
    ingredients: ["dough", "cheese", "tomato sauce", "toppings"],
    price: 10.99,
  };

  // Function stored in a variable to print the current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  // Conditional logic outside JSX
  let message;
  if (dataTypesExample.boolean) {
    message = "The boolean value is true!";
  } else {
    message = "The boolean value is false!";
  }

  return (
    <>
      <div>
        <h2>MyFirstComponent</h2>
        {/* Displaying different data types */}
        <p>String: {dataTypesExample.string}</p>
        <p>Number: {dataTypesExample.number}</p>
        <p>Boolean: {dataTypesExample.boolean ? "True" : "False"}</p>
        <p>Array: {dataTypesExample.array.join(", ")}</p>
        <p>
          Object: Name - {dataTypesExample.object.name}, Age -{" "}
          {dataTypesExample.object.age}
        </p>
        <p>Null Value: {dataTypesExample.nullValue}</p>
        <p>Undefined Value: {dataTypesExample.undefinedValue}</p>
        <p>Function: {dataTypesExample.functionValue()}</p>
      </div>
      <div>
        <h2>Other Examples</h2>
        <p>Food Information:</p>
        <p>Name: {foodInfo.name}</p>
        <p>Type: {foodInfo.type}</p>
        <p>Ingredients: {foodInfo.ingredients.join(", ")}</p>
        <p>Price: ${foodInfo.price}</p>
        <p>Current Date: {getCurrentDate()}</p>
      </div>
      <div>
        <h2>Additional Function Example</h2>
        <button onClick={dataTypesExample.sayHello}>Say Hello</button>
      </div>
      {/* Displaying message based on boolean value */}
      <div>
        <h2>Conditional Logic Example</h2>
        <p>{message}</p>
      </div>
      {/* Displaying message based on boolean value - Inside the return statement - Ternary Operator  */}
      <div>
        <h2>Conditional Logic Example</h2>
        {dataTypesExample.boolean ? (
          <p>The boolean value is true!</p>
        ) : (
          <p>The boolean value is false!</p>
        )}
      </div>
      {/* Displaying message based on boolean value - Inside the return statement - Mixing Operators */}
      {dataTypesExample.boolean && <p>hello world</p>}
    </>
  );
};
