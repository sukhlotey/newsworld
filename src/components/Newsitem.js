import React from "react";
import moment from "moment";
const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card border border-0">
        <div className="innerS">
          <img
            src={
              !imageUrl
                ? "https://www.asso-jockeys.com/src/news/empty.jpg"
                : imageUrl
            }
            className="card-img-top scale"
            alt="News img"
          />
        </div>
        <div
          className="card-body border border-0"
          style={{ backgroundColor: "#2e2929ed" }}
        >
          <h5 className="card-title text-light">{title}</h5>
          <p className="card-text text-light">{description}...</p>
          <div className="hover-info">
            <p className="card-text">
              <small className="text-light">
                By <b className="colorr">{!author ? "Unknown" : author}</b> on{" "}
                {moment(date).format("MMMM Do YYYY, h:mm a")}
              </small>
            </p>
          </div>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-light"
          >
            Read More <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
