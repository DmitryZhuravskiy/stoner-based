import React from "react";
import { Link } from "react-router-dom";
import { getDiscography } from "../redux/slices/stonerSlice";
import { useSelector, useDispatch } from "react-redux";
import {TrackProps, ArtistProps, ReviewProps } from '../redux/slices/stonerSlice'

type FilterProps = {
  bandName: string;
  title: string;
};

/*
type TrackProps = {
  id: string;
  trackName: string;
  duration: string;
};

type ArtistProps = {
  name: string;
  role: string;
};

type ReviewProps = {
  author: string;
  text: string;
};
*/

const AlbumContainer = () => {
  const dispatch = useDispatch();
  const { album, based, bandName } = useSelector((state: any) => state.stoner);

  const base = based
    .filter((x: FilterProps) => x.bandName === bandName)
    .filter((x: FilterProps) => x.title === album);
  const { title, group, image, year, country, tracklist, artists, reviews } =
    base[0];

  const dispatchDisco = (bandName: string) => {
    dispatch(getDiscography(bandName));
  };

  return (
    <div className="album">
      <h2 className="album__title">{title}</h2>
      <p className="album__artist">
        <Link
          to="/discography"
          className="artist__link"
          onClick={() => dispatchDisco(bandName)}
        >
          <p>
            {group}
            <span className="album__country">({country})</span>
          </p>
        </Link>
      </p>
      <div className="album__img-year-country-tracklist">
        <div className="album__img-year-country">
          <img src={image} alt={title} />
          <p className="album__year">{year}</p>
        </div>
        <div className="album__tracklist">
          <p className="tracklist__title">Tracklist</p>
          <ul>
            {tracklist.map((track: TrackProps) => (
              <li key={track.id}>
                {track.id} - {track.trackName} - {track.duration}
              </li>
            ))}
          </ul>
          <p className="artist__title">Artists</p>
          <ul>
            {artists.map((artist: ArtistProps) => (
              <li key={artist.name} className="artist__item">
                {artist.name} - {artist.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="album__reviews-title">Reviews</p>
      <ul>
        {reviews.map((review: ReviewProps) => (
          <li key={review.author} className="review">
            <h4 className="review__title">{review.author}</h4>
            <p className="review__text">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumContainer;
