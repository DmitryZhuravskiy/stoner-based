import React from 'react';
import based from './../base.json';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getDiscography } from "../redux";

function Pagination({ bandName, album, getDiscography }) {
  const base = based.filter(x => (x.bandName === bandName)).filter(x => (x.title === album));
  const { title, group, image, year, country, tracklist, artists, reviews } = base[0];
  return (
    <div className="album">
      <h2 className="album__title">{title}</h2>
      <p className="album__artist"><Link to="/discography" className="artist__link" onClick={() => getDiscography(bandName)}><p>{group}<span className="album__country">({country})</span></p></Link></p>
      <div className="album__img-year-country-tracklist">
        <div className="album__img-year-country">
          <img src={image} alt={title} />
          <p className="album__year">{year}</p>
        </div>
        <div className="album__tracklist">
          <p className="tracklist__title">Tracklist</p>
          <ul>
            {tracklist.map(track => (
              <li key={track.id} >
                {track.id} - {track.trackName} - {track.duration}
              </li>)
            )}
          </ul>
          <p className="artist__title">Artists</p>
          <ul>
            {artists.map(artist => (
              <li key={artist.name} className="artist__item">
                {artist.name} - {artist.role}
              </li>)
            )}
          </ul>
        </div>
      </div>
      <p className="album__reviews-title">Reviews</p>
      <ul>
        {reviews.map(review => (
          <li key={review.author} className="review">
            <h4 className="review__title">{review.author}</h4>
            <p className="review__text">{review.text}</p>
          </li>)
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bandName: state.stoner.bandName,
    album: state.stoner.album,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDiscography: (bandName) => dispatch(getDiscography(bandName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);