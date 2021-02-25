import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getAlbum } from "../redux";

function DiscographyContainer({ bandName, getAlbum, album, based }) {
    const base = based.filter(x => (x.bandName === bandName));
    return (
        <div className="discography">
            <h2 className="discography__title">Discography of {bandName}</h2>
            <ul>
                {base.sort((a, b) => (b.year-a.year)).map(album => (
                    <li key={album.title} className="discography__album">
                        <img src={album.image} alt={album.title}/>
                        <p className="discography__album-title"><Link to="/album" className="discography__album-title-link" onClick={() => getAlbum(bandName, album.title)}>{album.title}</Link></p>
                        <p className="discography__year">{album.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album,
        based: state.stoner.based
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAlbum: (bandName, album) => dispatch(getAlbum(bandName, album))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscographyContainer);