import React from 'react';
import { Helmet } from "react-helmet";

export const Header = () => {
  return (
    <Helmet>
      <title>Dan Frenette</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      <meta name="description" content="The website for a plucky kid who can write words and code pretty well."/>
      <meta name="keywords" content="Dan Frenette, Rails, React, Boston, Developer"/>
    </Helmet>
  );
}
