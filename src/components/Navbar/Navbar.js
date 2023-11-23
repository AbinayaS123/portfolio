import React from "react";
import "./Navbar.css";
import logo from "../../assets/lettera.jpg";
import { Link } from "react-scroll";
import { CiPhone } from "react-icons/ci";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"></img>
        <div className="desktopMenu">
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">Home</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">About</Link>
          <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}className="destopMenuListItem">Portfolio</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
        }}>
          <CiPhone className="desktopMenuIcon"/>Contact Me
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
