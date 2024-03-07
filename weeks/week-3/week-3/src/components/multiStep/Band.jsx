export const Band = ({ value, updateFormData }) => {
  const favoriteBand = (e) => updateFormData("favoriteBand", e.target.value);
  return (
    <div className="form-container select-container">
      <label>Favorite Band:</label>
      <select value={value} onChange={favoriteBand}>
        <option value="">Select a Band</option>
        <option value="parcels">Parcels</option>
        <option value="gorillaz">Gorillaz</option>
        <option value="the-1975">The 1975</option>
        <option value="the-war-on-drugs">The War on Drugs</option>
      </select>
    </div>
  );
};
