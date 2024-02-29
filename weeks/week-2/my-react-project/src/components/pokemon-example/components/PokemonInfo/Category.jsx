export const Category = ({ category }) => {
  return (
    <div>
      <strong>Category:</strong>
      <p>{category}</p>
    </div>
  );
};

Category.defaultProps = {
  category: "Pokemon category is missing",
};
