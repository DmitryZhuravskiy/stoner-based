import React from 'react';
import base from './../base.json';

const NewestRelease = ({ getDiscography, getAlbum }) =>
(
    <div className="newest">
        <ul>
            {
                base.map(album => (
                    <li key={album.title}>
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

export default NewestRelease;