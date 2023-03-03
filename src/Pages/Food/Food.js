import React from "react";
import Navbar from "../../Components/ImageGallery/Navbar/Navbar";
import ArticleVerticle2 from "../../Components/VerticleArticles/ArticleVerticleBolly";

const articles = require("../../Components/API_Data/FoodArticles");
const ads = require("../../Components/API_Data/FoodAds");

function Food() {
  return (
    <div>
      <Navbar />
      <ArticleVerticle2
        ads={ads}
        articles={articles}
        articleLink="https://www.inspiredtaste.net/24412/cocoa-brownies-recipe/"
        category="Food"
        photo="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Choco Brownies"
        date="October 5 2022"
      />
    </div>
  );
}

export default Food;
