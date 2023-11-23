import React from "react";
import "./intro.css";
import bg from "../../assets/imgabi.jpg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Abinaya</span>
            <br />
            Full Stack Developer
          </span>
          <p className="introPara">
            I am a highly skilled software developer with 2 years of experience
            in HTML, CSS, JavaScript, Node.js, and React.js. I possess knowledge
            of popular frameworks such as React and Node, along with experience
            in working with REST APIs and HTTP methods.
          </p>
          <Link>
            <button className="btn">
              Hire Me
            </button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
