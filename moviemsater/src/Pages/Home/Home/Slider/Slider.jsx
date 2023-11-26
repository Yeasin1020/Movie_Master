import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="">
      <div id="slider">
        <figure>
          <img
            className=" w-full h-[250px] lg:h-[580px]"
            src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/aa296105-442f-4665-9208-1779024767ce.webp"
            alt
          />
          <img
            className=" w-full h-[250px] lg:h-[580px]"
            src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/dbf52ea7-e4b3-4f45-b999-fb8457612272.webp"
            alt
          />
          <img
            className=" w-full h-[250px] lg:h-[580px]"
            src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/b6e07b80-e5a7-48c6-8919-0aa7c3e70abb.webp"
            alt
          />
          <img
            className=" w-full h-[250px] lg:h-[580px]"
            src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/2b063787-9006-4f0a-a072-451c9f3e402b.webp"
            alt
          />
          <img
            className=" w-full h-[250px] lg:h-[580px]"
            src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/d6d256f4-0214-449d-9814-80e44ba381a0.webp"
            alt
          />
        </figure>
      </div>
    </div>
  );
};

export default Slider;
