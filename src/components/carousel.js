import React from 'react'
import Slider from "react-slick";
import { StaticImage } from 'gatsby-plugin-image'


// Todo: gotta use media queries to make the carousel height responsive
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div
        // style={{ objectFit: 'cover' }}
        >
          <StaticImage
            src="../images/cover1.jpg"
            formats={["AUTO", "WEBP"]}
            alt="Carousel Image"
          // style={{ width: '100%', height: '500px', }}
          />
        </div>
        <div
        // style={{ objectFit: 'cover' }}
        >
          <StaticImage
            src="../images/cover2.jpg"
            formats={["AUTO", "WEBP"]}
            alt="Carousel Image"
          // style={{ width: '100%', height: '500px', }}
          />
        </div>

        <div
        // style={{ objectFit: 'cover' }}
        >
          <StaticImage
            src="../images/cover3.jpg"
            formats={["AUTO", "WEBP"]}
            alt="Carousel Image"
          // style={{ width: '100%', height: '500px', }}
          />
        </div>
        <div
        // style={{ objectFit: 'cover' }}
        >
          <StaticImage
            src="../images/cover4.jpg"
            formats={["AUTO", "WEBP"]}
            alt="Carousel Image"
          // style={{ width: '100%', height: '500px', }}
          />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
