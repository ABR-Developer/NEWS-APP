import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News Component</h2>
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="News 1" description="Politics" />
          </div>
          <div className="col-md-3">
            <NewsItem title="News 2" description="Cricket" />
          </div>
          <div className="col-md-3">
            <NewsItem title="News 3" description="Hockey" />
          </div>
          <div className="col-md-3">
            <NewsItem title="News 4" description="Monkey" />
          </div>
          <div className="col-md-3">
            <NewsItem title="News 5" description="Hockey" />
          </div>
          <div className="col-md-3">
            <NewsItem title="News 6" description="Cricket" />
          </div>
          <div className="col-md-3">
            <NewsItem title="News 7" description="Politics" />
          </div>
          <div className="col-md-3">
            <NewsItem title="News 8" description="Cricket" />
          </div>
        </div>
      </div>
    );
  }
}
