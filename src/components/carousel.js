import React from 'react'
import Slider from "react-slick";
import { StaticImage } from 'gatsby-plugin-image'

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
    <Slider {...settings}>
      <div>
        <StaticImage
          src="../images/carousel-8.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Carousel Image"
          style={{ width: '100%', height: '500px' }}
        />
      </div>
      <div>
        <StaticImage
          src="../images/carousel-3.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Carousel Image"
          style={{ width: '100%', height: '500px' }}
        />
      </div>

      <div>
        <StaticImage
          src="../images/carousel-5.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Carousel Image"
          style={{ width: '100%', height: '500px' }}
        />
      </div>
      <div>
        <StaticImage
          src="../images/carousel-7.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Carousel Image"
          style={{ width: '100%', height: '500px' }}
        />
      </div>
    </Slider>
  )
}

export default Carousel
