import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      numberOfArticles: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1f5c7b38f34447f4a11b972787f93af8&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,numberOfArticles: parsedData.totalResults});
    this.setState({numberOfArticles: 0});
  }

  handlerPreviousClick = async () => {
    console.log("prev");
    this.setState({ page: this.state.page - 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1f5c7b38f34447f4a11b972787f93af8&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlerNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1f5c7b38f34447f4a11b972787f93af8&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Component</h2>
        <div className="row content-evenly">
          {this.state.articles?.map((element) => {
            return <div className="col-md-4 my-5" key={element.url}>
                <NewsItem
                  title={element.title === null ? "Title Here" : element.title}
                  description={element.description === null ? "Description Here" : element.description}
                  imageUrl={element.urlToImage === null ? "logo.svg": element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
          })}
        </div>
        <div className="container d-flex justify-content-around">
          <div>
            <button
              className="btn btn-primary"
              disabled={this.state.page === 1}
              onClick={this.handlerPreviousClick}
            >
              &larr; Previous
            </button>
          </div>
          <div>
            {this.state.numberOfArticles}:{this.state.page}
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.handlerNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.numberOfArticles / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    )
   }
}