import React from "react";
export {
  getAlbum
} from "../actions/stonerBasedActions";

class Discography extends React.Component {
  // делаем запрос axios к базе по фильтрам bandName. Распаковываем bandName из state как bandName, и полученные массив альбомов после фильтра как base. Тогда фильтр в компоненте не нужен, и надо поправить.
  render () {
    return (
      <div className="discography">
        <h2>Discography of {props.bandName}</h2>
        <ul>
          {props.base.filter( x => x.bandName==props.bandName).map( album => (
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
