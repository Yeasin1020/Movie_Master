import React from "react";
import Card from "./Card/Card";
import Slider from "./Slider/Slider";
import Header from "../../Header/Header";
import Series from "./Series/Series";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* <Card></Card> */}
      <Header></Header>
      <Series></Series>
    </div>
  );
};

export default Home;
