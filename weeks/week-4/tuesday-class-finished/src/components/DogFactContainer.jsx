export const DogFactContainer = ({ fact }) => {
  const cleanFact = fact;
  return (
    <div>
      <h4>{!cleanFact ? "Loading..." : cleanFact}</h4>
    </div>
  );
};
