import React from "react";
import reactSvg from "../images/react-brands.svg";


function Header() {
  return (
    <header>


      <nav className="navbar  navbar-expand-lg  navbar-light" >
        <a className="navbar-brand" href="/"><img className="react-logo" src={reactSvg} alt="react-logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#skills">My Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#certificates">Certificates</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      </nav>


    </header>
  );
}

export default Header;