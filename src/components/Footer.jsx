import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <ul className="social-links">
                <li><a href="https://github.com/DmitryZhuravskiy" className="social-link">Me in GitHub</a></li>
                <li><a href="https://bronnitsy.hh.ru/resume/944e847aff0568d8200039ed1f393265335644"  className="social-link">Me in hh.ru</a></li>
                <li><a href="https://www.linkedin.com/in/dmitry-zhuravskiy-5081681b8/"  className="social-link">Me in Linkedin</a></li>
            </ul>
            <p className="copywright">Made from Dmtiry Zhuravskiy in 2021</p>
        </div>
    )
}

export default Footer;