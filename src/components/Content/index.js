import React, { useState } from "react";
import headshot from "../../headshot.jpg";
import { Bio } from "../Bio";
import { Posts } from "../Posts";

export const Content = () => {
  const [displayPosts, setDisplayPosts] = useState(true); // should default to false

  return (
    <div className="main">
      <div className="text-wrapper">
        <img id="headshot" alt="Dan Frenette" src={headshot} />
        <Bio />
      </div>
    </div>
  );
};
