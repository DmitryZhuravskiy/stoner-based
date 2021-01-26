import React from "react";
import based from "./../base.json"

class Album extends React.Component {
  render () {
    const base = based.filter( x => (x.bandName===this.state.bandName)).filter(x => (x.title===this.state.album));
    const { title, bandName, image, year, country, tracklist, artists, reviews } = base;
    return (
      <div className="album">
        <h2>{title}</h2>
        <p><Link to="/discography" onClick={getDiscography(bandName)}>{bandName}</Link></p>
        <img src={image} />
        <p>{year}</p>
        <p>{country}</p>
        <p>Tracklist</p>
        <ul>
          {tracklist.map( track => (
            <li>
              {track.id} - {track.trackName} - {track.duration}
            </li>)
          )}
        </ul>
        <p>Artists</p>
        <ul>
          {artists.map( artist => (
            <li>
              {artist.name} - {artist.role}
            </li>)
          )}
        </ul>
        <p>Reviews</p>
        <ul>
          {reviews.map( review => (
            <li>
              <h4>{review.author}</h4>
              <p>{review.text}</p>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

export default Album;
