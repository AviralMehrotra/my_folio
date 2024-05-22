import React from "react";

function Social() {
  return (
    <div className="home_social">
      <a
        href="https://www.github.com/aviralmehrotra"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/aviralmehrotra9"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://www.instagram.com/aviral._.mehrotra/"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
}

export default Social;
