import React, { useState } from "react";
import headshot from "../../images/headshot.jpg";
import { Bio } from "../Bio";
import { Posts } from "../Posts";

export const Content = () => {
  const [displayPosts, setDisplayPosts] = useState(false);

  return (
    <div className="main">
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
