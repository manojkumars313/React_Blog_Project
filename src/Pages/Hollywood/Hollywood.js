import React from "react";
import Navbar from "../../Components/ImageGallery/Navbar/Navbar";

import ArticleVerticle2 from "../../Components/VerticleArticles/ArticleVerticleBolly";

const articles = require("../../Components/API_Data/HollywoodArticles");
const ads = require("../../Components/API_Data/HollywoodAds");

function Hollywood() {
  return (
    <div>
      <Navbar />
      <ArticleVerticle2
        ads={ads}
        articles={articles}
        articleLink="https://www.techradar.com/news/microsoft-teams-users-are-using-it-to-send-confidential-business-data"
        category="Hollywood"
        photo="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Los Angeles, CA, Verenigde Staten"
        date="May 7 2022"
      />
    </div>
  );
}

export default Hollywood;
