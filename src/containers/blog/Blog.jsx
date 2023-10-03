import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./blog.css";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening we are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container-groupA">
        <Article
          imgUrl={blog01}
          data="Sep 26, 2021"
          title="open Ai is the future. let us exlore how it is?"
        />
        <Article
          imgUrl={blog02}
          data="Sep 26, 2021"
          title="open Ai is the future. let us exlore how it is?"
        />
        <Article
          imgUrl={blog03}
          data="Sep 26, 2021"
          title="open Ai is the future. let us exlore how it is? "
        />
        
        <Article
          imgUrl={blog04}
          data="Sep 26, 2021"
          title="open Ai is the future. let us exlore how it is? "
        />
        
        <Article
          imgUrl={blog05}
          data="Sep 26, 2021"
          title="open Ai is the future. let us exlore how it is? "
        />
        <Article
          imgUrl={blog01}
          data="Sep 26, 2021"
          title="open Ai is the future. let us exlore how it is?"
        />
      </div>
    </div>
  );
};

export default Blog;
