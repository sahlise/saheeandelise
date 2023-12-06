// pages/index.js
'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import './Carousel.css'

SwiperCore.use([Autoplay]);
const Carousel: React.FC = () => {

  const images = [
    { id: 1, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 2, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 3, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 4, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 5, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 6, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 7, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 8, src: '/images/1.jpg', alt: 'Image 1 Description' },
    { id: 9, src: '/images/1.jpg', alt: 'Image 1 Description' },
  ];

  const [loadedImagesCount, setLoadedImagesCount] = useState(false);

const handleImageLoaded = () => {
 console.log("Added image")
  setLoadedImagesCount(true);
};

//const allImagesLoaded = loadedImagesCount === images.length;

//{isActive ? 'activeClass' : 'inactiveClass'}
//"overflow-hidden"
  return (
    <div className=  {loadedImagesCount ? 'visible overflow-hidden' : 'collapse'}>
      <Swiper
          slidesPerView={2}
          onSlidesLengthChange={handleImageLoaded}
          loop={true}
          freeMode={true}
          speed={20000}
          autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
          className="swiper-wrapper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} className="w-full" />
              
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Carousel;

