import React, { useRef } from "react";
import "./Landing.css";
import Background from "./Background";
import { useHistory } from "react-router";

function Landing() {
  const history = useHistory();
  const emailRef = useRef('');
  return (
    <React.Fragment>
      <Background showSignInButton={true} showFlixnetLogo={true}>
        <div className="landing__content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
                    </h3>
          <div className="landing__input">
            <form>
              <input ref={emailRef} type="email" placeholder="Email Address" />
              <button className="landing__getStarted" onClick={() => history.push(`/login?email=${emailRef.current.value}`)}>GET STARTED</button>
            </form>
          </div>
        </div>
      </Background>
    </React.Fragment>
  );
}

export default Landing;
