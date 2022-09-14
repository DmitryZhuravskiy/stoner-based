import React from 'react';
import { Link } from "react-router-dom";

const Header = () =>  {
    return (
        <div className="header" >
            <h1 className="title-message">Stoner Base</h1>
            <div className="navigation">
                <ul>
                    <li><Link to="/" className="navigation__link-to-main">Main Page</Link></li>
                </ul>
            </div >
        </div>
    )
}

export default Header;