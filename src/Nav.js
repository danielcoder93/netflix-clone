import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const tranistionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", tranistionNavBar);
    return () => window.removeEventListener("scroll", tranistionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}
export default Nav;
