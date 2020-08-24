import React from "react";
import keeperApp from "../images/keeper_app.png";
import tindogSite from "../images/tindog-site.png"
import drumsSite from "../images/drums-site.png";
import todolistApp from "../images/todolist-app.png";
import newsletterApp from "../images/newsletter-app.png";
import simonsGame from "../images/simons-game.png";

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <hr />
                <h2>Projects</h2>
                <hr className="dotted-hr" />
                <div className="container">
                    <div class="row justify-content-around">
                        <div className="col-lg-6 col-sm-12">
                            <div className="projects-box">
                                <a a href="https://frozen-fjord-69017.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={newsletterApp} alt="newsletter-app" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="projects-box">
                                <a href="https://staleksandar1.github.io/Tindog-Bootstrap/" target="_blank" rel="noopener noreferrer"> <img src={tindogSite} alt="tindog-site" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="projects-box">
                                <a a href="https://staleksandar1.github.io/drums.sound/" target="_blank" rel="noopener noreferrer"> <img src={drumsSite} alt="drums-site" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="projects-box">
                                <a a href="https://cryptic-meadow-00902.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={todolistApp} alt="todolist-app" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="projects-box">
                                <a a href="https://frozen-fjord-69017.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={keeperApp} alt="keeper-app" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="projects-box">
                                <a a href="https://staleksandar1.github.io/the-simon-game/" target="_blank" rel="noopener noreferrer"> <img src={simonsGame} alt="simons-app" /></a>
                            </div>
                        </div>
                       
                    </div>
                </div>


            </div>
        </section>
    )
}


export default Projects;