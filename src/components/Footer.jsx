import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <ul className="social-links">
                <li><Link to="https://github.com/DmitryZhuravskiy" className="social-link">Me in GitHub</Link></li>
                <li><Link to="https://bronnitsy.hh.ru/resume/944e847aff0568d8200039ed1f393265335644"  className="social-link">Me in hh.ru</Link></li>
                <li><Link to="https://www.linkedin.com/in/dmitry-zhuravskiy-5081681b8/"  className="social-link">Me in Linkedin</Link></li>
            </ul>
            <p className="copywright">Made from Dmtiry Zhuravskiy in 2021</p>
        </div>
    )
}

export default Footer;