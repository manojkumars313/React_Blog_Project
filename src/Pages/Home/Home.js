import React from "react";
import Navbar from "../../Components/ImageGallery/Navbar/Navbar";
import NavbarRes from "../../Components/ImageGallery/Navbar/NavbarRes";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import ArticlesHorizontal from "../../Components/ArticleHorizontal/ArticleHorizontal";
import ArticleVerticle from "../../Components/VerticleArticles/ArticleVerticle";
import ImageSlideshow from "./ImageSlideShow/ImageSlideShow";
// import LatestStories from "./LatestStories/LatestStories";

// import { Link } from "react-router-dom";

// import "./PagesCss/Home.css";

const articlesHorizontal = require("../../Components/API_Data/ArticlesHorizontal.json");
const articlesVertical = require("../../Components/API_Data/Articles.json");
const ads = require("../../Components/API_Data/HomeAds.json");
const images = require("../../Components/API_Data/SliderImages.json");

function Home() {
  return (
    <div>
      <NavbarRes />
      <Navbar />

      <ImageGallery />
      <ArticlesHorizontal articles={articlesHorizontal} />
      <ArticleVerticle
        articles={articlesVertical}
        ads={ads}
        articleLink="https://www.pexels.com/photo/woman-crossing-on-bridge-238631/"
        category="Travel"
        photo="https://images.pexels.com/photos/13923041/pexels-photo-13923041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Bali       ,Indonesia"
        date="September 9 2022"
      />
      <ImageSlideshow images={images} />
      {/* <LatestStories /> */}
    </div>
  );
}

export default Home;
