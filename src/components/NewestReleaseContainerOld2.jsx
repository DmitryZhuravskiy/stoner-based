import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAlbum, getDiscography } from "../redux";
import React from "react";
import Pagination from "./Pagination";

const NewestReleaseContainer = ({
  albumsPerPage,
  activePage,
  based,
  getAlbum,
  getDiscography,
}) => {
  const lastAlbumId = albumsPerPage * activePage;
  const firstAlbumId = lastAlbumId - albumsPerPage;
  const baseSort = based
    .sort((a, b) => b.year - a.year)
    .slice(firstAlbumId, lastAlbumId);

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
                onClick={() => getDiscography(album.bandName)}
              >
                {album.bandName}
              </Link>
            </p>
            <p>
              <Link
                to="/album"
                className="album__description"
                onClick={() => getAlbum(album.bandName, album.title)}
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

const mapStateToProps = (state) => {
  return {
    albumsPerPage: state.stoner.albumsPerPage,
    activePage: state.stoner.activePage,
    based: state.stoner.based,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAlbum: (bandName, album) => dispatch(getAlbum(bandName, album)),
  getDiscography: (bandName) => dispatch(getDiscography(bandName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewestReleaseContainer);
