import React from "react";
import udemyCertificate from "../images/UC-dca19b40-3931-4d5d-a27d-316d632c369f.png";
import newmansCertificate1 from "../images/backend-01.png";
import newmansCertificate2 from "../images/backend-02.png";
import semosCertificate from "../images/Semos-andoid.png";



function Certificates() {
    return (
        <section id="certificates">
            <div className="container">
                <hr />
                <h2>Certificates</h2>
                <hr className="dotted-hr" />
                {/* <div className="carousel-certificates">
                <div id="certificates-carousel " class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="4000">
                    <ol class="carousel-indicators">
                        <li data-target="#certificates-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#certificates-carousel" data-slide-to="1"></li>
                        <li data-target="#certificates-carousel" data-slide-to="2"></li>
                        <li data-target="#certificates-carousel" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 carousel-img" src={udemyCertificate} alt="udemy-cerificate" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel-img" src={newmansCertificate1} alt="newmans-certificate-1" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel-img" src={newmansCertificate2} alt="newmans-certificate-2" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel-img" src={semosCertificate} alt="semos-certificate
                            " />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#certificates-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#certificates-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                </div> */}
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="4000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={udemyCertificate} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={newmansCertificate1} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={newmansCertificate2} alt="Third slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={semosCertificate} alt="Fourth slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true" ></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </section>
    )
}


export default Certificates;