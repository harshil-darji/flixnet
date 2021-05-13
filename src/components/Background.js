import React from 'react'
import { useHistory } from 'react-router';
import flixnetLogo from "../assets/images/flixnet.png";
import "./Background.css";

function Background(props) {
    const history = useHistory();
    return (
        <div className="landing">
            {props.showFlixnetLogo ? <img className="landing__logo" src={flixnetLogo} onClick={() => history.push("/")} alt="Flixnet" />
                : null}
            {props.showSignInButton ? <button className="signin__button" onClick={() => history.push("/login")}>
                Sign in
            </button>
                : null}
            <div className="landing__card">
                <div className="landing__gradient">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Background;