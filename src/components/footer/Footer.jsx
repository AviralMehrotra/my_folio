import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">MyFolio</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li> */}
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/aviral._.mehrotra/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@errorcode1415"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
          <a
            href="https://x.com/AviralMehrotra9"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">
          Made by Aviral Mehrotra <br />| ReactJs | Swiper | EmailJs |
        </span>
      </div>
    </footer>
  );
};

export default Footer;
