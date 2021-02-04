import React, { Component } from 'react';
import base from './../base.json';
import {
    Link
} from "react-router-dom";

class NewestReleaseContainer extends Component {
    render() {
        return (
            <div className="newest">
                <h3 className="newest__title">Свежая подборка пластинок</h3>
                <ul>
                    {
                        base.map(album => (
                            <li key={album.title}>
                                <img src={album.image} width="200" height="200" />
                                <p><Link to="/discography">{album.bandName}</Link></p>
                                <p><Link to="/album">{album.title}</Link></p>
                                <p>{album.year}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default NewestReleaseContainer;