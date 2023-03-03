import React from "react";
import Navbar from "../../Components/ImageGallery/Navbar/Navbar";
import ArticleVerticle2 from "../../Components/VerticleArticles/ArticleVerticleBolly";

const articles = require("../../Components/API_Data/BollywoodArticles");
const bollyWoodAds = require("../../Components/API_Data/BollywoodAds");

function Bollywood() {
  return (
    <div className="Bollywood">
      <Navbar />
      <ArticleVerticle2
        ads={bollyWoodAds}
        articles={articles}
        articleLink="https://www.google.com/search?client=firefox-b-d&q=Brahmastra"
        category="Tollywood"
        photo="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/28/960951-prabhas-shrutihaasan-salaar-releasedate.jpg"
        title="Salaar,SalaarTheSaga "
        date="September 9 2023"
      />
    </div>
  );
}

export default Bollywood;
