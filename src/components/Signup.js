import React, { useState } from 'react'
import "./Signup.css";
import { auth } from '../firebase';
import { useHistory, useLocation } from 'react-router';
import Background from './Background';
import toast from 'react-hot-toast';

function Signup() {
    
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);
    const [email, setEmail] = useState(query.get("email"));
    const [passwd, setPasswd] = useState('');
    const [confPasswd, setConfPasswd] = useState('');

    const register = (e) => {
        e.preventDefault();
        if(passwd !== confPasswd){
            toast.error("Passwords don't match!")
            return;
        }
        auth.createUserWithEmailAndPassword(email, passwd)
            .then((authUser) => { toast.success("Account created successfully!") })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <Background showSignInButton={false} showFlixnetLogo={true}>
            <div className="login__card">
                <form>
                    <h1>Register</h1>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                    <input value={passwd} onChange={(e) => setPasswd(e.target.value)} placeholder="Password" type="password" />
                    <input value={confPasswd} onChange={(e) => setConfPasswd(e.target.value)} placeholder="Confirm Password" type="password" />
                    <button type="submit" onClick={register}>Register</button>
                    <h4> <span className="gray">Already have an account? </span>
                        <span className="link" onClick={() => history.push(email?`/login?email=${email}`:`/login`)}>Sign in</span></h4>
                </form>
            </div>
        </Background>
    )
}

export default Signup;