import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">6 Months Working</span>
      </div>

      <div className="about_box">
        <i className="bx bx-rocket about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">25+ Projects</span>
      </div>

      <div className="about_box">
        <i className="bx bx-briefcase about_icon"></i>
        <h3 className="about_title">Internships</h3>
        <span className="about_subtitle">3+ Internships</span>
      </div>
    </div>
  );
};

export default Info;
