export const BandList = ({ bands }) => {
  return (
    <div>
      {bands.map((band, index) => (
        <div key={index}>
          <h2>{band.name}</h2>
          <p>Genre: {band.genre}</p>
          <p>Formed: {band.formed}</p>
          <h3>Members:</h3>
          <ul>
            {band.members.map((member, i) => (
              <li key={i}>
                {member.name} - {member.role}
              </li>
            ))}
          </ul>
          <h3>Albums:</h3>
          {band.albums.map((album, idx) => (
            <div key={idx}>
              <h4>
                {album.title} ({album.year})
              </h4>
              <ul>
                {album.trackListing.map((track, ind) => (
                  <li key={ind}>{track}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
