import React, { useState, useEffect } from "react";
import "./ArticleVerticle.css";
import TopPost from "../../Utility/HomeTopPosts/TopPostBollywood";
import "../../Utility/HomeTopPosts/TopPosts.css";
import Divider from "@mui/material/Divider";

function ArticleVerticle2({
  articles,
  photo,
  title,
  ads,
  category,
  date,
  articleLink,
}) {
  const [articlesData, setArticlesData] = useState([]);
  const [adsData, setAdsData] = useState([]);

  const [visible, setVisible] = useState(4);

  useEffect(() => {
    setArticlesData(articles);
  }, [articles]);

  useEffect(() => {
    setAdsData(ads);
  }, [ads]);

  const showMoreArticles = () => {
    setVisible((previousValue) => previousValue + 4);
  };

  return (
    <div className="av-main-Container">
      <header className="ah-header">
        <h1 className="av-heading">Latest Articles</h1>
        <hr className="av-hr" />
      </header>

      <main className="vh-main-container-internal">
        {articlesData.slice(0, visible).map((articleData, index) => {
          return (
            <div key={index}>
              <Divider />
              <div className="vh-container">
                <div
                  className="vh-images"
                  style={{ backgroundImage: `url(${articleData.photoUrl})` }}
                ></div>
                <div className="vh-images-caption">
                  <h1 className="title">
                    <a href={articleData.link}>{articleData.title}</a>
                  </h1>
                  <p className="description">{articleData.description}</p>
                  <p className="vh-images-date">
                    <span className="category">{articleData.category}</span>
                    <span> / {articleData.date}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <button className="load-more-btn" onClick={showMoreArticles}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2267/2267918.png"
            alt=""
          />
          Load More
        </button>

        <div className="ad-box">
          <h3>Advertisement</h3> <br />
          {adsData.map((data) => {
            return (
              <iframe
                title={data.title}
                src={data.link}
                frameBorder="0"
              ></iframe>
            );
          })}
        </div>
      </main>

      <TopPost
        photo={photo}
        title={title}
        category={category}
        articleLink={articleLink}
        date={date}
      />
    </div>
  );
}

export default ArticleVerticle2;
