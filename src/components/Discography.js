import React from "react";
import based from "./../base.json";
import {
  Link
} from "react-browser-router";

class Discography extends React.Component {
  render () {
    const base = based.filter( x => (x.bandName===this.props.bandName));
    return (
      <div className="discography">
        <h2>Discography of {this.props.bandName}</h2>
        <ul>
          {base.map( album => (
            <li key={album.title}>
              <img src={album.picture} />
              <p><Link to="/album" onClick={this.props.getAlbum(album.bandName, album.title)}>{album.title}</Link></p>
              <p>{album.year}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Discography;