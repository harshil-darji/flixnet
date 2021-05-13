import React, { useRef } from 'react';
import "./Login.css";
import "./Landing.css";
import { auth } from '../firebase';
import flixnetLogo from "../assets/images/flixnet.png";
import { useHistory } from 'react-router';

function Login() {

    const emailRef = useRef(null);
    const passwdRef = useRef(null);
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwdRef.current.value)
            .then((authUser) => { console.log(authUser) })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        //TODO: Fix this 2 css imports. Make one generic component for landingbackground
        <div className="landing">
            <img className="landing__logo" src={flixnetLogo} alt="Flixnet" />
            <div className="landing__card">
                <div className="landing__gradient">
                    <div className="login__card">
                        <form>
                            <h1>Sign In</h1>
                            <input ref={emailRef} placeholder="Email" type="email" />
                            <input ref={passwdRef} placeholder="Password" type="password" />
                            <button type="submit" onClick={signIn}>Sign In</button>
                            <h4> <span className="gray">New to Flixnet? </span>
                                <span className="link" onClick={() => history.push("/signup")}>Sign up now</span></h4>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;