import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {hits.map((item) => {
        return (
          <article key={item.objectID} className="story">
            <h4 className="title">{item.title}</h4>
            <p className="info">
              {item.points} points by{" "}
              <span>
                {item.author} | {item.num_comments} comments{" "}
              </span>
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-link"
            >
              read more
            </a>
            <button className="remove-btn"> remove</button>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
