import React from "react";
export {
  getAlbum,
  getDiscography
} from "../actions/stonerBasedActions";

class NewestRelease extends React.Component {
  // тут запрос axios к базе общий. Возвращаем переменную base
  render() {
    return (
      <div className="newest">
        <ul>
          {
            props.base.map( album => (
              <li>
                <img src={album.picture} />
                <p><Link to="/discography" onClick={getDiscography(album.bandName)}>{album.bandName}</Link></p>
                <p><Link to="/album" onClick={getAlbum(album.bandName, album.title)}>{album.title}</Link></p>
                <p>{album.year}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default NewestRelease;
