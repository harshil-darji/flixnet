import React, { useEffect, useState } from "react";
import "./Nav.css";
import flixnetLogo from "../assets/images/flixnet.png";
import { useHistory } from "react-router";

function Nav() {
  const [navColor, alterNavColor] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    window.scrollY > 100 ? alterNavColor(true) : alterNavColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${navColor && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo" src={flixnetLogo} alt="Flixnet logo" />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
