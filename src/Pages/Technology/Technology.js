import React from "react";
import Navbar from "../../Components/ImageGallery/Navbar/Navbar";

import ArticleVerticle2 from "../../Components/VerticleArticles/ArticleVerticleBolly";

const articles = require("../../Components/API_Data/TechnologyArticles");
const ads = require("../../Components/API_Data/TechnologyAds");

function Technology() {
  return (
    <div className="Technology">
      <Navbar />
      <ArticleVerticle2
        ads={ads}
        articles={articles}
        articleLink="https://www.techradar.com/news/microsoft-teams-users-are-using-it-to-send-confidential-business-data"
        category="Internet"
        photo="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"
        title="Microsoft Teams users are using it"
        date="September 9 2022"
      />
    </div>
  );
}

export default Technology;
