import React from "react";
import { Link } from "react-router-dom";
import {
  getAlbum
} from "../redux/slices/stonerSlice";
import { useSelector, useDispatch } from "react-redux";

type AlbumProps = {
  title: string,
  image: string,
  year: number,
  bandName: string,
}

const DiscographyContainer = () => {
  const dispatch = useDispatch();
  const { based, bandName } = useSelector((state: any) => state.stoner);

  const base = based.filter((x: AlbumProps) => x.bandName === bandName);

  const dispatchAlbum = (title: string) => {
    dispatch(getAlbum(title));
  };

  return (
    <div className="discography">
      <h2 className="discography__title">Discography of {bandName}</h2>
      <ul>
        {base
          .sort((a: AlbumProps, b: AlbumProps) => b.year - a.year)
          .map((album: AlbumProps) => (
            <li key={album.title} className="discography__album">
              <img src={album.image} alt={album.title} />
              <p className="discography__album-title">
                <Link
                  to="/album"
                  className="discography__album-title-link"
                  onClick={() => dispatchAlbum(album.title)}
                >
                  {album.title}
                </Link>
              </p>
              <p className="discography__year">{album.year}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DiscographyContainer;
