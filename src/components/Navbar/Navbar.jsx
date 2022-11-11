import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <h1 className="site-title">Jonathan Word</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
