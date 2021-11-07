import { Link } from "react-router-dom";
import { getAlbum, getDiscography } from "../redux";
import React from "react";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";

const NewestReleaseContainer = () => {
  const dispatch = useDispatch();
  const albumsPerPage = useSelector((state) => state.stoner.albumsPerPage);
  const activePage = useSelector((state) => state.stoner.activePage);
  const based = useSelector((state) => state.stoner.based);
  const lastAlbumId = albumsPerPage * activePage;
  const firstAlbumId = lastAlbumId - albumsPerPage;
  const baseSort = based
    .sort((a, b) => b.year - a.year)
    .slice(firstAlbumId, lastAlbumId);

  const dispatchDisco = (bandName) => {
    dispatch(getDiscography(bandName));
  };

  const dispatchAlbum = (bandName, album) => {
    dispatch(getAlbum(bandName, album));
  };

  return (
    <div className="newest">
      <h3 className="newest__title">Newest Stoner Records </h3>
      <ul>
        {" "}
        {baseSort.map((album) => (
          <li key={album.title}>
            <img src={album.image} width="200" height="200" alt={album.title} />
            <p>
              <Link
                to="/discography"
                className="album__band"
                onClick={() => dispatchDisco(album.bandName)}
              >
                {album.bandName}
              </Link>
            </p>
            <p>
              <Link
                to="/album"
                className="album__description"
                onClick={() => dispatchAlbum(album.bandName, album.title)}
              >
                {album.title}
              </Link>
            </p>
            <p>{album.year}</p>
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};

export default NewestReleaseContainer;
