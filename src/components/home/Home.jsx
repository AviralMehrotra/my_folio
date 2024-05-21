import React from "react";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import "./home.css";
import ScrollDown from "./ScrollDown.jsx";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
