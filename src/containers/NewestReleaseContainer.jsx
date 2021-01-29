import React, { Component } from 'react';
import NewestRelease from '../component/NewestRelease';
import { connect } from 'react-redux';
import { getAlbum, getDiscography } from '../actions';

class NewestReleaseContainer extends Component {

    constructor(props) {
        super(props);
        this.getAlbum = this.getAlbum.bind(this);
        this.getDiscography = this.getDiscography.bind(this);
    }

    render() {
        return (
            <NewestRelease getDiscography={this.getDiscography} album={this.album} bandName={this.bandName) />
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
        getDiscography: (bandName) => dispatch(getDiscography(bandName)),
        getAlbum: (bandName) => dispatch(getAlbum(bandName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewestReleaseContainer);