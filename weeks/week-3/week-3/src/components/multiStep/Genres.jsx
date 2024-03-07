export const Genres = ({ value, updateFormData }) => {
  const handleGenreChange = (genre) => {
    // Toggle the genre in the array
    const updatedGenres = value.includes(genre)
      ? value.filter((g) => g !== genre)
      : [...value, genre];
    // Update formData with selected genre(s)
    updateFormData("favoriteGenre", updatedGenres);
  };

  return (
    <div className="form-container genres-container">
      <h2>Select Favorite Genres</h2>
      <label>
        <input
          type="checkbox"
          value="Rock"
          checked={value.includes("Rock")}
          onChange={() => handleGenreChange("Rock")}
        />
        Rock
      </label>
      <label>
        <input
          type="checkbox"
          value="Pop"
          checked={value.includes("Pop")}
          onChange={() => handleGenreChange("Pop")}
        />
        Pop
      </label>
      <label>
        <input
          type="checkbox"
          value="Hip Hop"
          checked={value.includes("Hip Hop")}
          onChange={() => handleGenreChange("Hip Hop")}
        />
        Hip Pop
      </label>
    </div>
  );
};
