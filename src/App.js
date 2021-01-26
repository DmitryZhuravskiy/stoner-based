import './App.css';
import React from "react";

const base =
{
  "id": 0,
  "title": "Bipolar",
  "bandName": "Void Droid",
  "image": `./images/void-droid--bipolar.jpg`,
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

class App extends React.Component {
  // тут делаем запрос axios к базе по фильтрам bandName и album. Полученные данные распаковываем в переменные title, bandName, image, year, country, tracklist, artists, reviews
  render() {
    const { title, bandName, image, year, country, tracklist, artists, reviews } = base;
    return (
      <div className="album">
        <h2>{title}</h2>
        <p>{bandName}</p>
        <img src={image} width="150" height="150"/>
        <p>{year}</p>
        <p>{country}</p>
        <p>Tracklist</p>
        <ul>
          {tracklist.map(track => (
            <li>
              {track.id} - {track.trackName} - {track.duration}
            </li>)
          )}
        </ul>
        <p>Artists</p>
        <ul>
          {artists.map(artist => (
            <li>
              {artist.name} - {artist.role}
            </li>)
          )}
        </ul>
        <p>Reviews</p>
        <ul>
          {reviews.map(review => (
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

export default App;
