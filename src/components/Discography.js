import React from "react";
import based from "./../base.json";

class Discography extends React.Component {
  render () {
    const base = based.filter( x => (x.bandName===this.state.bandName));
    return (
      <div className="discography">
        <h2>Discography of {props.bandName}</h2>
        <ul>
          {base.map( album => (
            <li>
              <img src={album.picture} />
              <p><Link to="/album" onClick={getAlbum(album.bandName, album.title)}>{album.title}</Link></p>
              <p>{album.year}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Discography;
