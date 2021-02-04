import React, { Component } from 'react';
import base from './../base.json';
import {
  Link
} from "react-router-dom";

const based = {
  "id": 0,
  "title": "Bipolar",
  "bandName": "Void Droid",
  "image": "./images/void-droid--bipolar.jpg",
  "year": 2020,
  "country": "Greece",
  "tracklist": [
    {
      "id": "01",
      "trackName": "Super Ego Villain",
      "duration": "04:56"
    },
    {
      "id": "02",
      "trackName": "Zarathustra",
      "duration": "05:59 "
    },
    {
      "id": "03",
      "trackName": "Milkaholic",
      "duration": "06:27 "
    },
    {
      "id": "04",
      "trackName": "Somen Mask",
      "duration": "06:06 "
    },
    {
      "id": "05",
      "trackName": "The Mars March",
      "duration": "03:47"
    },
    {
      "id": "06",
      "trackName": "The Venus Effect",
      "duration": "06:19"
    },
    {
      "id": "07",
      "trackName": "Clockface",
      "duration": "04:31"
    },
    {
      "id": "08",
      "trackName": "Bipolar",
      "duration": "02:34"
    },
    {
      "id": "09",
      "trackName": "Puer Blue",
      "duration": "09:06 "
    }
  ],
  "artists": [
    {
      "name": "AK",
      "role": "vocal, guitar"
    },
    {
      "name": "Bill Herra",
      "role": "guitar"
    },
    {
      "name": "Aggelos Ulmo",
      "role": "bass"
    },
    {
      "name": "Haris",
      "role": "drums"
    }
  ],
  "reviews": [
    {
      "author": "dave ross",
      "text": "Great sonics great vocals sometimes harsh mostly clean. My initial feeling was Corey Taylor ditching Slipknot to join the Palm Desert scene "
    },
    {
      "author": "051R158",
      "text": "Thanks for this Album. It had to grow on me. I Love it.eh Milkaholic seriously ? Is about drinking Milk !? i dont know if this is something to sing about. maybe you could explain it to me. "
    }
  ]
}

class AlbumContainer extends Component {
  render() {
    //const based = base.filter(x => (x.bandName == "Void Droid")).filter(x => (x.title == "Bipolar"));
    const { title, bandName, image, year, country, tracklist, artists, reviews } = based;
    return (
      <div className="album">
        <h2 className="album__title">{title}</h2>
        <p className="album__artist"><Link to="/discography" className="artist__link">{bandName}<p className="album__country">({country})</p></Link></p>
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
}

export default AlbumContainer;