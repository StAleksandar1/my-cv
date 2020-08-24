import React from 'react';
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header/>
      <Intro />
      <Skills />
      <Projects/>
      <Certificates />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
