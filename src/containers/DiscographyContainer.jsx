import React, { Component } from 'react';
import based from './../base.json';
import {
    Link
  } from "react-router-dom";

class DiscographyContainer extends Component {
    render() {
        const base = based.filter(x => (x.bandName === "Void Droid"));
        return (
            <div className="discography">
                <h2 className="discography__title">Discography of {base[0].bandName}</h2>
                <ul>
                    {base.map(album => (
                        <li key={album.title} className="discography__album">
                            <img src={album.image} />
                            <p className="discography__album-title"><Link to="/album" className="discography__album-title-link">{album.title}</Link></p>
                            <p className="discography__year">{album.year}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default DiscographyContainer;