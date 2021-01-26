import React from "react";
import base from './../base.json';
import {
  BrowserRouter,
  Route,
  Link
} from "react-browser-router";

class NewestRelease extends React.Component {
  render() {
    return (
      <div className="newest">
        <ul>
          {
            base.map( album => (
              <li>
                <img src={album.image} />
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
