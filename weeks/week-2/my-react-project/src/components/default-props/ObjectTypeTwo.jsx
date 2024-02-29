export const ObjectTypeTwo = ({
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
      <h2>{headingProp.defaultValue}</h2>
      <h4>{subheadingProp.defaultValue}</h4>
      <p>{paragraphProp.defaultValue}</p>
      <ul>
        {arrayOfObjectsProp.defaultValue.map((obj, index) => (
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
        {arrayProp.defaultValue.map((item) => (
          <li key={item}>Array - {item}</li>
        ))}
      </ul>
      {/* <p>arrayOfObjectsProp.defaultValue</p> */}
      {/* Boolean Value */}
      <h4>{boolProp.defaultValue.toString()}</h4>
      {/* USING JSX Conditionals */}
      {boolProp.defaultValue && <p>I will appear if value is true</p>}
      {!boolProp.defaultValue && <p>I will appear if value is false</p>}
      {/* Using Ternary Operators */}
      {boolProp.defaultValue ? (
        <p>I will appear if value is true</p>
      ) : (
        <p>I will appear if value is false</p>
      )}
      {/* Number Prop */}
      <p>I am a nunmber prop with the value {numberProp.defaultValue}</p>
    </>
  );
};

ObjectTypeTwo.defaultProps = {
  headingProp: {
    defaultValue: "I am a heading", // String
    required: true,
  },
  subheadingProp: {
    defaultValue: "I am a subheading!", // String
    required: false,
  },
  paragraphProp: {
    defaultValue: "I am a paragraph", // Strings
    required: true,
  },
  arrayOfObjectsProp: {
    defaultValue: [
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
    ],
    required: false,
  },
  arrayProp: {
    defaultValue: [1, 2, 3], // Array
    required: false,
  },
  boolProp: {
    defaultValue: true, // Boolean
    required: true,
  },
  numberProp: {
    defaultValue: 42, // Number
    required: true,
  },
};
