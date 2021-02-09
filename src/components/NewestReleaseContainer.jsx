import base from './../base.json';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getAlbum, getDiscography } from "../redux";
import React from 'react';
import Pagination from "./Pagination";

function NewestReleaseContainer({ getAlbum, getDiscography, bandName, album, firstAlbumId, lastAlbumId }) {
    const baseSort = base.sort((a, b) => (b.year - a.year)).slice(firstAlbumId, lastAlbumId);
    return ( <
        div className = "newest" >
        <
        h3 className = "newest__title" > Fresh Stoner Records < /h3> <
        ul > {
            baseSort.map(album => ( <
                li key = { album.title } >
                <
                img src = { album.image }
                width = "200"
                height = "200"
                alt = { album.title }
                /> <
                p > < Link to = "/discography"
                onClick = {
                    () => getDiscography(album.bandName) } > { album.bandName } < /Link></p >
                <
                p > < Link to = "/album"
                onClick = {
                    () => getAlbum(album.bandName, album.title) } > { album.title } < /Link></p >
                <
                p > { album.year } < /p> <
                /li>
            ))
        } <
        /ul> <
        Pagination / >
        <
        /div>
    )
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album,
        firstAlbumId: state.stoner.firstAlbumId,
        lastAlbumId: state.stoner.lastAlbumId
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