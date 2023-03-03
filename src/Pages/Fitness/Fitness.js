import React from "react";
import Navbar from "../../Components/ImageGallery/Navbar/Navbar";
import ArticleVerticle2 from "../../Components/VerticleArticles/ArticleVerticleBolly";

const articles = require("../../Components/API_Data/FitnessArticles");
const ads = require("../../Components/API_Data/FitnessAds");

function Fitness() {
  return (
    <div>
      <Navbar />
      <ArticleVerticle2
        ads={ads}
        articles={articles}
        articleLink="https://www.healthline.com/health/fitness/10-ways-to-move-more"
        category="Fitness"
        photo="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="10 Ways to Move More in Everyday Life"
        date="October 9 2022"
      />
    </div>
  );
}

export default Fitness;
