import React, { useState } from "react";
import { Content } from "../Content";
import { Header } from "../Header";
import { Posts } from "../Posts";

export const App = () => {
  const [displayPosts, setDisplayPosts] = useState(false);

  return (
    <>
      <Header />
      {displayPosts ? <Posts setDisplayPosts={setDisplayPosts}/> : <Content />}
    </>
  );
};
