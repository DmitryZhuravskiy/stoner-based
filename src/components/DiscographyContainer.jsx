import React from "react";
import { Link } from "react-router-dom";
import { getAlbum } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const DiscographyContainer = () => {
  const dispatch = useDispatch();
  const bandName = useSelector((state) => state.stoner.bandName);
  const based = useSelector((state) => state.stoner.based);
  const base = based.filter((x) => x.bandName === bandName);

  const dispatchAlbum = (bandName, title) => {
    dispatch(getAlbum(bandName, title));
  };

  return (
    <div className="discography">
      <h2 className="discography__title">Discography of {bandName}</h2>
      <ul>
        {base
          .sort((a, b) => b.year - a.year)
          .map((album) => (
            <li key={album.title} className="discography__album">
              <img src={album.image} alt={album.title} />
              <p className="discography__album-title">
                <Link
                  to="/album"
                  className="discography__album-title-link"
                  onClick={() => dispatchAlbum(bandName, album.title)}
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
