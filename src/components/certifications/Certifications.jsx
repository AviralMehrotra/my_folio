import React, { useState } from "react";
import "./certifications.css";

const Certifications = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="certifications section" id="certifications">
      <h2 className="section_title">Certifications</h2>
      <p className="section_subtitle">My Verified Credentials</p>

      <div className="certifications_container container grid">
        <div className="certifications_content">
          <div>
            <i className="uil uil-web-grid certifications_icon"></i>
            <h3 className="certifications_title">Front-End Web-Development</h3>
          </div>
          <span className="certifications_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right certifications_button-icon"></i>
          </span>
          <div
            className={
              toggle === 1
                ? "certifications_modal active-modal"
                : "certifications_modal"
            }
          >
            <div className="certifications_modal-content">
              <i
                className="uil uil-times certifications_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="certifications_modal-title">Frontend Development</h3>
              <p className="certifications_modal-description">
                Got a basic overview of being a front-end web developer by
                learning about HTML, CSS, JavaScript, jQuery, and Bootstrap!
              </p>

              <ul className="certifications_modal-certifications grid">
                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Web development basics with HTML
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Cascading Style Sheets
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    JavaScript programming
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    jQuery JavaScript library
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Bootstrap framework
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="certifications_content">
          <div>
            <i className="uil uil-react certifications_icon"></i>
            <h3 className="certifications_title">Ultimate React Course</h3>
          </div>
          <span className="certifications_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right certifications_button-icon"></i>
          </span>
          <div
            className={
              toggle === 2
                ? "certifications_modal active-modal"
                : "certifications_modal"
            }
          >
            <div className="certifications_modal-content">
              <i
                className="uil uil-times certifications_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="certifications_modal-title">ReactJs</h3>
              <p className="certifications_modal-description">
                Mastering React from beginner to advanced! Next.js, Context API,
                React Query, Redux, Tailwind, advanced patterns.
              </p>

              <ul className="certifications_modal-certifications grid">
                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    React fundamentals
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Using react components
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Building Single-Page Applications
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Building real-world features
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Styling React apps with Tailwind CSS
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="certifications_content">
          <div>
            <i className="uil uil-windows certifications_icon"></i>
            <h3 className="certifications_title">
              Web Technologies with Django
            </h3>
          </div>
          <span className="certifications_button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right certifications_button-icon"></i>
          </span>
          <div
            className={
              toggle === 3
                ? "certifications_modal active-modal"
                : "certifications_modal"
            }
          >
            <div className="certifications_modal-content">
              <i
                className="uil uil-times certifications_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="certifications_modal-title">Django</h3>
              <p className="certifications_modal-description">
                Explored the basic structure of a web application, and how a web
                browser interacts with a web server.
              </p>

              <ul className="certifications_modal-certifications grid">
                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Request-Response Cycle, The basis of HTTP
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Working with Django on PythonAnywhere
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Hyper Text Markup Language
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Cascading Style Sheets
                  </p>
                </li>

                <li className="certifications_modal-certification">
                  <i className="uil uil-check-circle certifications_modal-icon"></i>
                  <p className="certifications_modal-info">
                    Structured Querry Language
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
