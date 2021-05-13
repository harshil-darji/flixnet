import React, { useState } from "react";
import "./Landing.css";
import flixnetLogo from "../assets/images/flixnet.png";
import Login from "./Login";

function Landing() {
  const [signIn, setSignIn] = useState(false);

  return (
    <React.Fragment>
      {signIn ? (
        <Login />
      ) : (
        <>
          <div className="landing">
            <div className="landing__background">
              <img className="landing__logo" src={flixnetLogo} alt="Flixnet" />
              <button
                className="signin__button"
                onClick={() => setSignIn(true)}
              >
                Sign in
              </button>
              <div className="landing__card">
                <div className="landing__gradient">
                  <div className="landing__content">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>
                      Ready to watch? Enter your email to create or restart your
                      membership.
                    </h3>
                    <div className="landing__input">
                      <form>
                        <input type="email" placeholder="Email Address" />
                        <button
                          className="landing__getStarted"
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

export default Landing;
