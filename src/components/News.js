import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { API_KEY } from "../../env";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  let baseURL = `
  https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${props.category}`;
  const [url, setURL] = useState(baseURL.concat("&page=1"));
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // setArticles(articles.concat(json.articles));
        setArticles((prev) => prev.concat(json.articles));
        setTotalArticles(json.totalResults);
      });
  }, [url]);

  // function handleClick(event) {
  //   const name = event.target.name;
  //   if (name === "prevBtn") {
  //     setPage(page - 1);
  //     setURL(baseURL.concat(`&page=${page - 1}`));
  //   } else if (name === "nextBtn") {
  //     setPage(page + 1);
  //     setURL(baseURL.concat(`&page=${page + 1}`));
  //   }
  //   window.scrollTo(0, 0);
  // }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function fetchMoreData() {
    setPage((prev) => prev + 1);
    setURL(baseURL.concat(`&page=${page + 1}`));
    console.log("chummted");
  }

  function handleLog() {
    console.log({
      page,
      url,
      articles,
      totalArticles,
      value: articles.length !== totalArticles,
    });
  }

  return (
    <div className="container my-4" style={{ width: "75%" }}>
      <h1 className="my-4" style={{ fontWeight: "bolder" }}>
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      <button onClick={handleLog}>Log</button>

      <InfiniteScroll
        dataLength={totalArticles}
        next={() => {
          console.log("yo");
          fetchMoreData();
        }}
        hasMore={articles.length !== totalArticles}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((article, index) => {
              return (
                <div className="col-md-4 my-4">
                  <NewsItem
                    title={article.title}
                    desc={article.description}
                    imgURL={article.urlToImage}
                    url={article.url}
                    source={article.source.name}
                    time={article.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="d-flex justify-content-between">
        <button
          style={page === 1 ? { visibility: "hidden" } : {}}
          name="prevBtn"
          onClick={handleClick}
          type="button"
          className="btn btn-dark "
        >
          Prev
        </button>
        <button
          style={
            page === Math.ceil(totalArticles / 9)
              ? { visibility: "hidden" }
              : {}
          }
          name="nextBtn"
          onClick={handleClick}
          type="button"
          className="btn btn-dark "
        >
          Next
        </button>
      </div> */}
    </div>
  );
}

export default News;
