import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Bio = ({ setDisplayPosts }) => {
  return (
    <div className="text fade-in-upward">
      <h1>Hi, I'm Dan Frenette</h1>
      <h2 data-testid="bio-text">
        I'm a Full-Stack Software Engineer at{" "}
        <a href="https://thegnar.co">The Gnar Company</a>. I also{" "}
        <button onClick={() => setDisplayPosts(true)}>love to write</button>.
      </h2>
      <a
        data-testid="linkedin-link"
        href="https://www.linkedin.com/in/danfrenette"
        target="_blank"
        rel="noopener noreferrer"
        className="social linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        data-testid="github-link"
        href="https://www.github.com/danfrenette"
        target="_blank"
        rel="noopener noreferrer"
        className="social github"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a
        data-testid="email-link"
        href="mailto:dan.r.frenette@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};
