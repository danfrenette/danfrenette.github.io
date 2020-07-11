import React, { useState } from "react";
import headshot from "../../images/headshot.jpg";
import nhBackround from "../../images/nhbackground.jpg";
import { Bio } from "../Bio";
import { Posts } from "../Posts";

export const Content = () => {
  const [displayPosts, setDisplayPosts] = useState(false);
  const [imageClass, setImageClass] = useState("loading");
  const imageLoadHandler = () => { setImageClass("loaded") }

  return (
    <div className="main">
      <img
        src={nhBackround}
        alt="NH Forest/Waterfall (full resolution)"
        className={`background-image ${imageClass}`}
        onLoad={imageLoadHandler}
      />
      <div className="text-wrapper">
        <button
          className="headshot-wrapper"
          onClick={() => setDisplayPosts(false)}
        >
          <img id="headshot" alt="Dan Frenette" src={headshot} />
        </button>
        {displayPosts ? <Posts /> : <Bio setDisplayPosts={setDisplayPosts} />}
      </div>
    </div>
  );
};
