export const Weaknesses = ({ weaknesses }) => {
  return (
    <div>
      <p>
        <strong>Weaknesses:</strong>
      </p>
      {weaknesses.map((weakness) => (
        <p key={weakness}>{weakness}</p>
      ))}
    </div>
  );
};

Weaknesses.defaultProps = {
  weaknesses: "Pokemon weaknesse(s) are missing",
};
