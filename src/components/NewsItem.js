import React from "react";

function NewsItem(props) {
  const imgStyle = {
    width: "100%",
    height: "14vw",
    objectFit: "cover",
  };

  return (
    <div className="card">
      <img
        src={
          props.imgURL
            ? props.imgURL.split(" ")[0]
            : "https://images.indianexpress.com/2020/09/shinchan.jpg?w=389"
        }
        className="card-img-top"
        alt="..."
        style={imgStyle}
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.title ? props.title.slice(0, 35) : ""}...
        </h5>
        <p className="card-text">
          {props.desc ? props.desc.slice(0, 50) : ""}...
        </p>
        <p className="card-text text-muted">
          By {props.source} at {new Date("2022-04-09T06:26:12Z").toGMTString()}
        </p>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
