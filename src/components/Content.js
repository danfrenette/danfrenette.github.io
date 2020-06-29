import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import headshot from "../headshot.jpg";

export const Content = () => {
  return (
    <div className="main">
      <div className="text-wrapper">
        <div className="text fade-in-upward">
          <img id="headshot" alt="Dan Frenette" src={headshot} />
          <h1>Hi, I'm Dan Frenette</h1>
          <h2>
            I'm a <em>Full-Stack Software Engineer</em> working for{" "}
            <a href="https://thegnar.co">The Gnar Company</a>.
          </h2>
          <a
            href="https://www.github.com/danfrenette"
            target="_blank"
            rel="noopener noreferrer"
            className="social github"
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <a
            href="https://www.linkedin.com/in/danfrenette"
            target="_blank"
            rel="noopener noreferrer"
            className="social linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:danfrenette@hey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};
