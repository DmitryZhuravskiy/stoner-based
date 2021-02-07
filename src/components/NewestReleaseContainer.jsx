import base from './../base.json';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getAlbum, getDiscography } from "../redux";
import React from 'react';

function NewestReleaseContainer({ getAlbum, getDiscography, bandName, album }) {
    return (
        <div className="newest">
            <h3 className="newest__title">Свежая подборка пластинок</h3>
            <ul>
                {
                    base.map(album => (
                        <li key={album.title}>
                            <img src={album.image} width="200" height="200" alt={album.title}/>
                            <p><Link to="/discography" onClick={() => getDiscography(album.bandName)}>{album.bandName}</Link></p>
                            <p><Link to="/album" onClick={() => getAlbum(album.bandName, album.title)}>{album.title}</Link></p>
                            <p>{album.year}</p>
                        </li>
                    ))
                }
            </ul>
            <p>Это группа  {bandName}</p>
            <p>Альбом в стеке  {album}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAlbum: (bandName, album) => dispatch(getAlbum(bandName, album)),
    getDiscography: (bandName) => dispatch(getDiscography(bandName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewestReleaseContainer);