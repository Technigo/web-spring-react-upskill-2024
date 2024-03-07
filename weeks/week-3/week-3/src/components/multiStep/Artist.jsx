export const Artist = ({ value, updateFormData }) => {
  const favoriteArtist = (e) =>
    updateFormData("favoriteArtist", e.target.value);
  return (
    <>
      <div className="form-container select-container">
        <label>Artist of the year:</label>
        <select value={value} onChange={favoriteArtist}>
          <option>Select an Artist</option>
          <option value="beyonce">Beyonce</option>
          <option value="taylor-swift">Taylor Swift</option>
          <option value="shakira">Shakira</option>
          <option value="karol-g">Karol G</option>
        </select>
      </div>
    </>
  );
};
