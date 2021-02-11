import base from './../base.json';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getAlbum, getDiscography } from "../redux";
import React from 'react';
import Pagination from "./Pagination";

class NewestReleaseContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumsPerPage: this.props.albumsPerPage,
            activePage: this.props.activePage,
            lastAlbumId: this.albumsPerPage*this.activePage,
            firstAlbumId: this.lastAlbumId - this.albumsPerPage,
            baseSort: base.sort((a, b) => (b.year - a.year)).slice(this.firstAlbumId, this.lastAlbumId),
        };
        this.getDiscography = this.props.getDiscography;
        this.getAlbum = this.props.getAlbum;
    }

    componentDidUpdate(prevProps) {
        if (this.props.activePage !== prevProps.activePage || this.props.albumsPerPage !== prevProps.albumsPerPage ) {
            this.baseSort = base.sort((a, b) => (b.year - a.year)).slice(this.firstAlbumId, this.lastAlbumId);
        }
    }

    render() {
        this.baseSort = base.sort((a, b) => (b.year - a.year)).slice(this.firstAlbumId, this.lastAlbumId);
        return (<
            div className="newest">
            <h3 className="newest__title"> Fresh Stoner Records </h3>
            <ul> {this.state.baseSort.map(album => (<li key={album.title} >
                <img src={album.image} width="200" height="200" alt={album.title} />
                <p><Link to="/discography" onClick={() => this.getDiscography(album.bandName)}>{album.bandName}</Link></p>
                <p><Link to="/album" onClick={() => this.getAlbum(album.bandName, album.title)}>{album.title}</Link></p>
                <p>{album.year}</p></li>))}</ul>
            <Pagination />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album,
        albumsPerPage: state.stoner.albumsPerPage,
        activePage: state.stoner.activePage
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