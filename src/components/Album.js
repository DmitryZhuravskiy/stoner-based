import React from "react";
import based from "./../base.json";
import {
  Link
} from "react-browser-router";

class Album extends React.Component {
  render () {
    const base = based.filter( x => (x.bandName===this.props.bandName)).filter(x => (x.title===this.props.album));
    const { title, bandName, image, year, country, tracklist, artists, reviews } = base;
    return (
      <div className="album">
        <h2>{title}</h2>
        <p><Link to="/discography" onClick={this.props.getDiscography(bandName)}>{bandName}</Link></p>
        <img src={image} alt={album.title} />
        <p>{year}</p>
        <p>{country}</p>
        <p>Tracklist</p>
        <ul>
          {tracklist.map( track => (
            <li key={track.id}>
              {track.id} - {track.trackName} - {track.duration}
            </li>)
          )}
        </ul>
        <p>Artists</p>
        <ul>
          {artists.map( artist => (
            <li key={artist.name}>
              {artist.name} - {artist.role}
            </li>)
          )}
        </ul>
        <p>Reviews</p>
        <ul>
          {reviews.map( review => (
            <li key={review.author}>
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