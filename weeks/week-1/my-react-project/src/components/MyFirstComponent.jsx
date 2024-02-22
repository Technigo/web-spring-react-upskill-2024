export const MyFirstComponent = () => {
  // ALL LOGIC meaning all JS goes here right above the retrun statement

  // String
  const myString = "Hello, World!";

  // Number
  const myNumber = 42;

  // Boolean
  const myBoolean = true;

  // Array
  // IMPORTANT - WE ALWAYS START AT 0
  const myArray = [1, 2, 3, 4, 5];

  // Object
  const myObject = {
    name: "John",
    age: 30,
    city: "New York",
  };

  // Function
  const myFunction = () => {
    console.log("This is a function.");
  };
  return (
    <>
      <div>
        <p>String equals to {myString}</p>
        <p>Number: {myNumber}</p>
        <p>Array: {myArray.join(", ")}</p>
        <p>Array: {myArray[3]}</p>
        <p>Boolean: {myBoolean.toString()}</p>
        {myBoolean && <p>I Like Pizza with pineapples</p>}
        {!myBoolean && <p>I do not like Pizza pineapples and swedish pizza</p>}

        <p>
          Hello my name is {myObject.name}, I am {myObject.age} years old and i
          currently live in {myObject.city}{" "}
        </p>
        <p>Function: {myFunction.toString()}</p>
      </div>
    </>
  );
};
