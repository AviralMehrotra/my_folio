import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section_title">Qualification</h2>
      <p className="section_subtitle">My Personal Journey</p>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggle === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => setToggle(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => setToggle(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggle === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  B-Tech: Computer Science and Engineering
                </h3>
                <span className="qualification_subtitle">SRMU - Lucknow</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">Intenship</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2023- Aug 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  B-Tech: Information Technology
                </h3>
                <span className="qualification_subtitle">BVDU - Pune</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">Intenship</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2022- Oct 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">R.G Minerals</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">Intenship</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2023- Aug 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  B-Tech: Information Technology
                </h3>
                <span className="qualification_subtitle">BVDU - Pune</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">Intenship</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2022- Oct 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
