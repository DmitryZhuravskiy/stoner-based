import React from "react";
import based from "./../base.json";
import {
  Link
} from "react-browser-router";

const Discography = (props) => {
const base = based.filter( x => (x.bandName===props.bandName));
return (
    <div className="discography">
      <h2>Discography of {props.bandName}</h2>
      <ul>
        {base.map( album => (
          <li key={album.title}>
            <img src={album.picture} />
            <p><Link to="/album" onClick={props.getAlbum(album.bandName, album.title)}>{album.title}</Link></p>
            <p>{album.year}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
 
export default Discography;