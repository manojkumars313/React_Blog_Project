import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/Error/PageNotFound";
import Bollywood from "./Pages/Bollywood/Bollywood";
import Technology from "./Pages/Technology/Technology";
import Hollywood from "./Pages/Hollywood/Hollywood";
import Fitness from "./Pages/Fitness/Fitness";
import Food from "./Pages/Food/Food";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Hollywood" element={<Hollywood />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Food" element={<Food />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
