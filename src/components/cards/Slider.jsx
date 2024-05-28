import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const MySlider = () => {

    const sliderRef = useRef(null);

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      innerWidth: 100
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src="https://atgarant.ru/drive/files/public/big/369394178ae89f681e88fbe61fda5fcc3013f78430.jpg" alt="" />
        </div>
        <div>
        <img src="https://atgarant.ru/drive/files/public/big/369394178ae89f681e88fbe61fda5fcc3013f78430.jpg" alt="" />
        </div>
        <div>
        <img src="https://atgarant.ru/drive/files/public/big/369394178ae89f681e88fbe61fda5fcc3013f78430.jpg" alt="" />
        </div>
        <button onClick={previousSlide}>Назад</button>
      <button onClick={nextSlide}>Вперед</button>
      </Slider>
    );
  };
  
  export default MySlider;