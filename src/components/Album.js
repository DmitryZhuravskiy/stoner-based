import React from "react";
export {
  getDiscography
} from "../actions/stonerBasedActions";

class Album extends React.Component {
  // тут делаем запрос axios к базе по фильтрам bandName и album. Полученные данные распаковываем в переменные title, bandName, image, year, country, tracklist, artists, reviews
  render () {
    return (
      <div className="album">
        <h2>{props.title}</h2>
        <p><Link to="/discography" onClick={getDiscography(props.bandName)}>{props.bandName}</Link></p>
        <img src={props.image} />
        <p>{props.year}</p>
        <p>{props.country}</p>
        <p>Tracklist</p>
        <ul>
          {props.tracklist.map( track => {
            <li>
              {track.id} - {track.trackName} - {track.duration}
            </li>
          })}
        </ul>
        <p>Artists</p>
        <ul>
          {props.artists.map( artist => {
            <li>
              {artist.name} - {artist.role}
            </li>
          })}
        </ul>
        <p>Reviews</p>
        <ul>
          {props.reviews.map( review => {
            <li>
              <h4>{review.author}</h4>
              <p>{review.text}</p>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Album;
