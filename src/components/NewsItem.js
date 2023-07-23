import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://jbordendotcom.files.wordpress.com/2020/04/498dc-breakingnews.jpg": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            {/* <p className="card-text"><small className="text-body-secondary">By {author? "Unknown" : author} on {date}</small></p> */}
            <a rel = "noreferrer" href={newsUrl} target= "_blank" className="btn btn-sn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
