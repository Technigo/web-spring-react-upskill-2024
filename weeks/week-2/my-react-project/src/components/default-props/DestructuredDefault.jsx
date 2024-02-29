export const DestructuredDefault = ({
  headingProp = "I am a heading", // String
  subheadingProp = "I am a subheading!", // String
  paragraphProp = "I am a paragraph", // String
  arrayOfObjectsProp = [
    {
      name: "John",
      lastName: "Doe",
      country: "USA",
      favoriteFood: "Pizza",
    },
    {
      name: "Alice",
      lastName: "Smith",
      country: "Canada",
      favoriteFood: "Sushi",
    },
  ], // Array of Objects
  arrayProp = [1, 2, 3], // Array
  boolProp = true, // Boolean
  numberProp = 42, // Number
}) => {
  return (
    <>
      <h2>{headingProp}</h2>
      <h4>{subheadingProp}</h4>
      <p>{paragraphProp}</p>
      <ul>
        {arrayOfObjectsProp.map((obj, index) => (
          <li key={index}>
            <p>Name: {obj.name}</p>
            <p>Last Name: {obj.lastName}</p>
            <p>Country: {obj.country}</p>
            <p>Favorite Food: {obj.favoriteFood}</p>
          </li>
        ))}
      </ul>
      {/* Looping Array */}
      <ul>
        {arrayProp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Boolean Value */}
      <h4>{boolProp.toString()}</h4>
      {/* USING JSX Conditionals */}
      {boolProp && <p>I will appear if value is true</p>}
      {!boolProp && <p>I will appear if value is false</p>}
      {/* Using Ternary Operators */}
      {boolProp ? (
        <p>I will appear if value is true</p>
      ) : (
        <p>I will appear if value is false</p>
      )}
    </>
  );
};
