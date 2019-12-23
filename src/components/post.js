import React, { useState } from "react";
import "../App.css";
import "./posts.json";

export default function Post() {
  let data = require("./posts.json");
  const [article, setArticle] = useState(data[0]);
  console.log(data[0].body);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          {" "}
          <button
            className="btn btn-sm btn-block btn-info"
            onClick={() => setArticle(data[0])}
          >
            Artcle 1
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-sm btn-block btn-info"
            onClick={() => setArticle(data[1])}
          >
            Article 2
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-sm btn-block btn-info"
            onClick={() => setArticle(data[2])}
          >
            Article 3
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-sm btn-block btn-info"
            onClick={() => setArticle(data[3])}
          >
            Article 4
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div className="row">
          <div className="col-md-1 ">
            <i className="fa fa-user-circle-o icons text-danger"></i>

            <i className="fa fa-moon-o text-primary icons"></i>
            <i className="fa fa-music icons"></i>
            <i className="fa fa-volume-up text-info icons"></i>
            <i className="fa fa-save text-info icons"></i>
            <i className="fa fa-close text-danger icons"></i>
            <i className="fa fa-envelope icons"></i>
            <i className="fa fa-twitter text-primary icons"></i>
          </div>
          <div className="col-md-11">
            <h1>{article.title}</h1>
            <hr></hr>
            <p className="article">
              {article.body.slice(0, article.body.length / 2)}
              <br/>
              <br/>
              {article.body.slice(article.body.length / 2,-1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
