export const Name = ({ value, updateFormData }) => {
  const getUserName = (e) => updateFormData("name", e.target.value);
  return (
    <>
      <div className="form-container">
        <label>Enter your Name:</label>
        <input type="text" value={value} onChange={getUserName} />
      </div>
    </>
  );
};
