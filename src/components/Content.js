import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Content = () => {
  return (
    <div className="main">
      <div className="text-wrapper">
        <div className="text fade-in-upward">
          <a href="http://andmade.co">
            <img
              id="avy"
              alt="Dan Frenette"
              src="http://www.gravatar.com/avatar/c7c1224bdb32dcb2ddd2bbff48736002.png"
            />
          </a>
          <h1>Hi, I'm Headline.</h1>
          <h2>
            This is a simple template. You can put your description here. It's
            responsive and you can include nice{" "}
            <a href="http://google.com" id="link">
              links
            </a>
            .
          </h2>
          <a href="https://www.github.com/danfrenette" className="social">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <a href="https://www.linkedin.com/in/danfrenette" className="social">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:danfrenette@hey.com" className="social" id="mailbtn">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};
