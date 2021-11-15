import React, {useState} from "react";

// Bootstrap components
import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel = (props) => {

   const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.slides.map((slide, index) => (
        <Carousel.Item key={index} >
          <div className="carousel-item-content" style={{backgroundImage:`url(${slide.background})`}}>
            {slide.text}
          </div>         
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;