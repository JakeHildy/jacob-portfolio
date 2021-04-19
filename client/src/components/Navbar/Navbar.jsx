import React from "react";
import "./Navbar.scss";
import GithubLogo from "./../../assets/logos/github.svg";
import LinkedinLogo from "./../../assets/logos/linkedin.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__home">
        Jake Rules
      </a>
      <ul className="navbar__links">
        <li>
          <a href="https://github.com/JakeHildy" className="navbar__link">
            <img
              className="navbar__link-img"
              src={GithubLogo}
              alt="Github Link"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jacob-hildebrandt-web-dev/"
            className="navbar__link"
          >
            <img
              className="navbar__link-img"
              src={LinkedinLogo}
              alt="LinkedIn Link"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
