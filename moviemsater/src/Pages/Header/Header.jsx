import { dividerClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Header = () => {
  const [movie, setMovie] = useState([]);


  useEffect(() => {
    fetch("Movie.json")
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


  return (
    <><Carousel responsive={responsive}>
      {movie.map(m => <div>
        <img src={m.thumbnail} alt={m.name} />
      </div>)}
    </Carousel>
    </>
  );
};

export default Header;