export const Age = ({ value, updateFormData }) => {
  const getAge = (e) => updateFormData("age", e.target.value);
  return (
    <>
      <div className="form-container">
        <label>Enter your Age:</label>
        <input type="number" onChange={getAge} value={value} />
      </div>
    </>
  );
};
