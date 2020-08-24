import React from "react";


function Contact() {
    return (
        <section id="contact">


            <div className="container">
                <hr />
                <div className="contact">
                    <h2>Get In Touch</h2>
                    <h3>If you are into exchangeing ideas.</h3>
                    <p className="contact-message">You like to chat and colaborate? Feel free to contact me!</p>
                    <a className="btn btn-warning btn-contact " href="mailto:aleksandarstojkovski1@gmail.com">CONTACT ME</a>

                </div>
                <hr />
            </div>

            <div className="bottom-container">

                <a className="footer-link" href="https://www.linkedin.com/in/aleksandar-stojkovski-934b7363/" style={{ textDecoration: "none" }}><i class="fab fa-linkedin"></i> LinkedIn</a>
                <a className="footer-link" href="https://twitter.com/StAleksandar1" style={{ textDecoration: "none" }}><i class="social-icon fab fa-twitter"></i> Twitter</a>
                <a className="footer-link" href="https://github.com/StAleksandar1" style={{ textDecoration: "none" }}><i class="fab fa-github"></i> GitHub</a>

            </div>


        </section>
    )
}


export default Contact;