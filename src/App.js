import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Certifications from "./components/certifications/Certifications.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import Projects from "./components/projects/Projects.jsx";

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
        <Projects />
      </main>
    </>
  );
}

export default App;
