### Instructions

- Create a React Component: Begin by creating a new React component file called SongList.js.

- Import React and the Song Component: Import the React library and the Song component (which we'll create next) at the top of your SongList.js file.

- Import the JSON Data: Import the provided JSON data into your SongList.js file.

- Define the Component: Define a functional component called SongList.

- Render the Song List: Inside the SongList component, render the list of songs fetched from the JSON data.

- Map Over the Songs Array: Use the map method to iterate over the songs array and render each song using the Song component.

- Destructure Song Properties: Destructure the song properties (e.g., rank, title, artist, album, year) inside the map function.

- Pass Song Data as Props: Pass the destructured song properties as props to the Song component.

- Export the Component: Export the SongList component to make it available for use in other parts of the application.

Here's how the refactored code structure would look:

`
import data from './data.json'; // Import the JSON data
import { Song } from './components/Song'; // Import the Song component

export const SongList = () => {
const songs = data.songs;

const renderSongs = () => {
return songs.map(({ rank, title, artist, album, year }) => (
<Song
        key={rank}
        title={title}
        artist={artist}
        album={album}
        year={year}
      />
));
};

return (
<>

<h2>Song List</h2>
{renderSongs()}
</>
);
};
`

Make sure to create the `Song.jsx` component file as well, which will be responsible for rendering individual song information. This structure will ensure that each song is encapsulated within its own Song component, similar to how Pokemon components are used in the example you provided.
