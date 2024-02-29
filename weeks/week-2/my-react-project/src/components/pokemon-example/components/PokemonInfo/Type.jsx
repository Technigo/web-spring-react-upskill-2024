export const Type = ({ types }) => {
  return (
    <div>
      <span>Types:</span>
      {types.map((type) => (
        <div key={type}>{type}</div>
      ))}
      {/* {types.map(() => { })}  CURLY BRACKETS ARE USED TO WRITE JS EXPRESSIONS */}
      {/* {types.map(() => ())} We use parenthesis because we want towrite html expressions */}
    </div>
  );
};

Type.defaultProps = {
  types: "Pokemon Type(s) are missing",
};
