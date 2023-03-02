import React from "react";
import "./ImageGallery.css";
import { Link } from "react-router-dom";

function ImageGallery() {
  return (
    <div className="grid-image-container">
      <Link to="/Information1" className=" grid-images-one">
        <div className="grid-images ">
          <div className="grid-images-caption-one">
            <h2>Skagafoss, Iceland</h2>
            <h5>Travel / March 1 2023</h5>
          </div>
        </div>
      </Link>

      <Link to="/Information2" className="two">
        <div className="grid-images-two ">
          <div className="grid-images-caption-two">
            <h2>The Sonud, Bp, Brazil</h2>
            <h5>Travel / March 2 2022</h5>
          </div>
        </div>
      </Link>

      <Link to="/Information3" className="three">
        <div className="grid-images-three ">
          <div className="grid-images-caption-three">
            <h2>View</h2>
            <h5>Travel / March 1 2022</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ImageGallery;
