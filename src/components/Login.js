import React, { useState } from 'react';
import "./Login.css";
import "./Landing.css";
import { auth } from '../firebase';
import { useHistory, useLocation } from 'react-router';
import Background from './Background';
import toast from 'react-hot-toast';

function Login() {
    
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);
    const [email, setEmail] = useState(query.get("email"));
    const [passwd, setPasswd] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, passwd)
            .then((authUser) => { toast.success("Welcome!") })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <Background showSignInButton={false} showFlixnetLogo={true}>
            <div className="login__card">
                <form>
                    <h1>Sign In</h1>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                    <input value={passwd} onChange={(e) => setPasswd(e.target.value)} placeholder="Password" type="password" />
                    <button type="submit" onClick={signIn}>Sign In</button>
                    <h4> <span className="gray">New to Flixnet? </span>
                        <span className="link" onClick={() => history.push("/signup")}>Sign up now</span></h4>
                </form>
            </div>
        </Background>
    )
}

export default Login;