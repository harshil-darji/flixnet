import React, { useState } from "react";
import "./Login.css";
import flixnetLogo from "../assets/images/flixnet.png";
import SignUp from "./SignUp";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <React.Fragment>
      {signIn ? (
        <SignUp />
      ) : (
        <>
          <div className="login">
            <div className="login__background">
              <img className="login__logo" src={flixnetLogo} alt="Flixnet" />
              <button
                className="signin__button"
                onClick={() => setSignIn(true)}
              >
                Sign in
              </button>
              <div className="login__card">
                <div className="login__gradient">
                  <div className="login__content">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>
                      Ready to watch? Enter your email to create or restart your
                      membership.
                    </h3>
                    <div className="login__input">
                      <form>
                        <input type="email" placeholder="Email Address" />
                        <button
                          className="login__getStarted"
                          onClick={() => setSignIn(true)}
                        >
                          GET STARTED
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default Login;
