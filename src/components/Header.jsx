import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function Header({ bandName, album }) {
    return ( <
        div className = "header" >
        <
        h1 className = "title-message" > Stoner Base < /h1> <
        div className = "navigation" >
        <
        ul >
        <
        li >
        <
        Link to = "/" > Main Page < /Link> < /
        li > <
        /ul> < /
        div > <
        /div>
    )
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album,
    }
}

export default connect(
    mapStateToProps
)(Header);