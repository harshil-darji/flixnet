import React, { useRef } from 'react';
import "./SignUp.css";
import { auth } from '../firebase';

function SignUp() {

    const emailRef = useRef(null);
    const passwdRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwdRef.current.value)
            .then((authUser) => { console.log(authUser) })
            .catch((error) => {
                alert(error.message);
            })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwdRef.current.value)
            .then((authUser) => { console.log(authUser) })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwdRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4> <span className="signUp__gray">New to Flixnet? </span>
                    <span className="signUp__link" onClick={register}>Sign up now</span></h4>
            </form>
        </div>
    )
}

export default SignUp;