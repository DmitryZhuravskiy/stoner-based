import { Link } from "react-router-dom";
import {
  getAlbum,
  getDiscography,
  fetchData,
} from "../redux/slices/stonerSlice";
import { useEffect } from "react";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";

type AlbumProps = {
  title: string;
  image: string;
  year: number;
  bandName: string;
};

const NewestReleaseContainer = () => {
  const dispatch = useDispatch();
  const { based, firstAlbumId, lastAlbumId } = useSelector(
    (state: any) => state.stoner
  );

  const dispatchDisco = (bandName: string) => {
    dispatch(getDiscography(bandName));
  };

  const dispatchAlbum = (album: string) => {
    dispatch(getAlbum(album));
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, [lastAlbumId, firstAlbumId]);

  return (
    <div className="newest">
      <h3 className="newest__title">Newest Stoner Records </h3>
      <ul>
        {" "}
        {based.map((album: AlbumProps) => (
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
                onClick={() => dispatchAlbum(album.title)}
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
