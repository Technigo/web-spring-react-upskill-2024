export const Email = ({ value, updateFormData }) => {
  const getEmail = (e) => updateFormData("email", e.target.value);
  return (
    <>
      <div className="form-container">
        <label>Email:</label>
        <input type="email" value={value} onChange={getEmail} />
      </div>
    </>
  );
};
