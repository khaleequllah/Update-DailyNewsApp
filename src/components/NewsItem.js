import React, { Component } from "react";
import "./component.css";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, source } =
      this.props;

    return (
      <div class="card-deck">
        <div className="card" id="rcorners4">
          <span
            className="position-absolute top-100 start-50 translate-middle badge rounded-pill bg-success"
            style={{ left: "90% ", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imgurl
                ? "https://static.tweaktown.com/news/8/4/84680_01_nasa-telescope-capture-insane-photo-of-three-galaxies-merging-into-one_full.jpg"
                : imgurl
            }
            className="card-img-top"
            id="rcorners3"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
