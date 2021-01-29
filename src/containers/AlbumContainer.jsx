import React, { Component } from 'react';
import Album from '../component/Album';
import { connect } from 'react-redux';
import { getDiscography } from '../actions';

class AlbumContainer extends Component {

    constructor(props) {
        super(props);
        this.getDiscography = this.getDiscography.bind(this);
    }

    render() {
        return (
            <Album getDiscography={this.getDiscography} album={this.album} bandName={this.bandName} />
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
        getDiscography: (bandName) => dispatch(getDiscography(bandName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer);