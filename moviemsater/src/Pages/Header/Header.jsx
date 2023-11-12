import React, { useEffect, useState,useRef } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css'


const Header = () => {
  const [movie,setMovie] = useState([]);


  useEffect(()=>{
    fetch("Movie.json")
    .then(res => res.json())
    .then(data => setMovie(data));
  },[])

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 3, 0);
  };


  return (
    <div className=''>
<Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {movie.map((slideContent, index) => (
          <SwiperSlide  key={slideContent} virtualIndex={index}>
            <div className=''>
              <div>
              <img className='' src={slideContent.thumbnail} alt="" srcset="" />
              </div>
              <p className='text-white'>{slideContent.name}</p>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
};

export default Header;