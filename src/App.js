import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Certifications from "./components/certifications/Certifications.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
// import Testi from "./components/testimonials/Testi.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrolltoTop from "./components/scrolltotop/ScrolltoTop.jsx";
import Works from "./components/projects/Works.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Qualification />
        {/* <Testi /> */}
        <Works />
        <Contact />
      </main>
      <Footer />
      <ScrolltoTop />
    </>
  );
}

export default App;
