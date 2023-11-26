import { Link, dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Header.css";
import "./HeaderButton.scss"

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
      <div>
        <Carousel responsive={responsive}>
          {movie.map((m) => (
            <div className="mr-5 mt-[-110px] lg:mt-5 ">
              <div class=" hero-container ">
                <div class="main-container">
                  <div class="poster-container pt-[185px] lg:pt-0 lg:w-[230px]">
                    <img src={m.thumbnail} class="poster" />
                    <div className=" pt-2 text-gray-700 text-center">
                      {m.name}
                    </div>
                  </div>

                  <div class="ticket-container w-[155px] lg:w-[270px] mt-[145px] lg:mt-0 h-[300px] lg:h-[450px]">
                    <div class="ticket__content">
                      <h4 class="ticket__movie-title"></h4>

                      <div class="mt-6 mb-5">
                        <Link
                          href="#"
                          class="button pulse inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                          Live View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Header;
