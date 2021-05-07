import React from 'react'
import githubLogo from '../assets/images/github.png';
import "./Footer.css";
import ReactTooltip from 'react-tooltip';

function Footer() {
    return (
        <footer className="app__footer">
            <ReactTooltip type="dark" />
            <img data-tip="Star this project on Github!" className="app__footer__logo" onClick={() => window.open("https://github.com/harshil-darji/flixnet", "_blank")} src={githubLogo} alt="Github" />
            <div className="app__made__by">Made with <span data-tip=";)">❤</span> by Harshil Darji</div>
        </footer>
    )
}

export default Footer;