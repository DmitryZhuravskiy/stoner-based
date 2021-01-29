import React, { Component } from 'react';
import Discography from '../component/Discography';
import { connect } from 'react-redux';
import { getAlbum } from '../actions';

class DiscographyContainer extends Component {

    constructor(props) {
        super(props);
        this.getAlbum = this.getAlbum.bind(this);
    }

    render() {
        return (
            <Discography getAlbum={this.getAlbum} album={this.album} bandName={this.bandName} />
        );
    }
}

function mapStateToProps(state) {
    return {
        album: state.album,
        bandName: state.bandName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAlbum: (bandName, title) => dispatch(getAlbum(bandName, title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscographyContainer);