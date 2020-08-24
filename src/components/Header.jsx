import React from "react";
import reactSvg from "../images/react-brands.svg";


function Header() {
  return (
    <header>


      <nav class="navbar  navbar-expand-lg  navbar-light" >
        <a class="navbar-brand" href="/"><img className="react-logo" src={reactSvg} alt="react-logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#skills">My Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#certificates">Certificates</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      </nav>


    </header>
  );
}

export default Header;