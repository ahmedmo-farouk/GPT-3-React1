import React from "react";
import "./Article.css";
const Article = ({ imgUrl, data, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article">
        <div>
          <p>{data}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full Article </p>
      </div>
    </div>
  );
};

export default Article;
