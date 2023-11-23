import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Header.css";

const Header = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("Movie.json")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="ml-3 mt-10  font-bold text-3xl">Top Movie for You</div>
      <Carousel responsive={responsive}>
        {movie.map((m) => (
          <div className="mr-5">
            <div class="hero-container ">
              <div class="main-container">
                <div class="poster-container">
                  
                    <img
                      src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
                      class="poster"
                    />
                  
                </div>
                <div class="ticket-container">
                  <div class="ticket__content">
                    <h4 class="ticket__movie-title"></h4>
                    <p class="ticket__movie-slogan">
                    {m.name}
                    </p>
                    <p class="ticket__current-price">$28.00</p>
                    <p class="ticket__old-price">$44.99</p>
                    <button class="ticket__buy-btn">Buy now</button>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Header;
