import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function Header({ bandName, album }) {
    return (
        <div className="header">
            <h1 className="title-message">Stoner Base</h1>
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/discography">Дискография {bandName}</Link>
                    </li>
                    <li>
                        <Link to="/album">Альбом {bandName} - {album}</Link>
                    </li>
                    <li>
                        <Link to="/">Все, что есть</Link>
                    </li>
                </ul>
            </div>
        </div>
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