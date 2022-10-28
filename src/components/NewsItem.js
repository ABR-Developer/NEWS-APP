import React, { Component } from "react";

export default class NewsItem extends Component {

  render() {
    let { title, description , imageUrl, newsUrl} = this.props;
    return (
      <div className="card my-2" style={{width : "18rem"}}>
        <img src={imageUrl} style={{height : '140px' , width: '100%'}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{height : '48px' , overflow: 'hidden'}}>{title}</h5>
          <p className="card-text" style={{height : '100px' , overflow: 'hidden'}}>{description}</p>
          <a href={newsUrl} className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
