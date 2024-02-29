export const ObjectType = ({
  headingProp,
  subheadingProp,
  paragraphProp,
  arrayOfObjectsProp,
  arrayProp,
  boolProp,
  numberProp,
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
      {/* Lopping Array */}
      <ul>
        {arrayProp.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Boolean Value */}
      <h4>{boolProp.toString()}</h4>
      {/* USING JSX Conitionals */}
      {boolProp && <p>I will appear if value is true</p>}
      {!boolProp && <p>I will appear if value is false</p>}
      {/* Using Ternary Operators */}
      {boolProp ? (
        <p>I will appear if value is true</p>
      ) : (
        <p>I will appear if value is false</p>
      )}
      {/* Number Prop */}
      <p>I am a nunmber prop with the value {numberProp}</p>
    </>
  );
};

ObjectType.defaultProps = {
  headingProp: "I am a heading", // String
  subheadingProp: "I am a subheading!", // String
  paragraphProp: "I am a paragraph", // Strings
  arrayOfObjectsProp: [
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
  ], // Object
  arrayProp: [1, 2, 3], // Array
  boolProp: true, // Boolean
  numberProp: 42, // Number
};
