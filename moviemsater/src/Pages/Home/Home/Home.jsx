import React from "react";
import Slider from "./Slider/Slider";
import Series from "./Series/Series";
import CartSlider from "../../Header/CartSlider";
import AnimeCart from "../../Header/Animes/AnimeCart";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* <Card></Card> */}
      <CartSlider></CartSlider>
      <AnimeCart></AnimeCart>
      <Series></Series>
    </div>
  );
};

export default Home;
