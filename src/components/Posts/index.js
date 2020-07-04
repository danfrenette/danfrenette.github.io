import React from "react";

const posts = [
  {
    text: "Useful Sidekiq Patterns",
    url: "https://blog.thegnar.co/useful-sidekiq-patterns"
  },
  {
    text: "Tell Don't Ask: Benefits and Limitations",
    url: "https://blog.thegnar.co/tell-dont-ask-benefits-and-limitations"
  },
  {
    text: "PRY like a PRO",
    url: "https://blog.thegnar.co/PRY-like-a-PRO"
  }
];

export const Posts = () => {
  return (
    <div className="text fade-in-upward posts">
      {posts.map(({url, text}) => (
        <h2>
          <a className="post" href={url}>{text}</a>
        </h2>
      ))}
    </div>
  );
};
