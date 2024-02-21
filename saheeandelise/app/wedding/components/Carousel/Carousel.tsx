// pages/index.js
'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import './Carousel.css'
import Image from 'next/image';

SwiperCore.use([Autoplay]);
const Carousel: React.FC = () => {

  const images = [
    { id: 0, src: '/images/collages/0.jpg', alt: 'Image 1 Description' },
    { id: 1, src: '/images/collages/1.jpg', alt: 'Image 1 Description' },
    { id: 2, src: '/images/collages/2.jpg', alt: 'Image 1 Description' },
    { id: 3, src: '/images/collages/3.jpg', alt: 'Image 1 Description' },
    { id: 4, src: '/images/collages/4.jpg', alt: 'Image 1 Description' },
    { id: 5, src: '/images/collages/5.jpg', alt: 'Image 1 Description' },
    { id: 6, src: '/images/collages/6.jpg', alt: 'Image 1 Description' },
    { id: 7, src: '/images/collages/7.jpg', alt: 'Image 1 Description' },
    { id: 8, src: '/images/collages/8.jpg', alt: 'Image 1 Description' },
    { id: 9, src: '/images/collages/9.jpg', alt: 'Image 1 Description' },
    { id: 10, src: '/images/collages/10.jpg', alt: 'Image 1 Description' },
    { id: 11, src: '/images/collages/11.jpg', alt: 'Image 1 Description' },
    { id: 12, src: '/images/collages/12.jpg', alt: 'Image 1 Description' },
    { id: 13, src: '/images/collages/13.jpg', alt: 'Image 1 Description' },
    { id: 14, src: '/images/collages/14.jpg', alt: 'Image 1 Description' },
    { id: 15, src: '/images/collages/15.jpg', alt: 'Image 1 Description' },
    { id: 16, src: '/images/collages/16.jpg', alt: 'Image 1 Description' },
    { id: 17, src: '/images/collages/17.jpg', alt: 'Image 1 Description' },
    { id: 18, src: '/images/collages/18.jpg', alt: 'Image 1 Description' },
    { id: 19, src: '/images/collages/19.jpg', alt: 'Image 1 Description' },
    { id: 20, src: '/images/collages/20.jpg', alt: 'Image 1 Description' },
    { id: 21, src: '/images/collages/21.jpg', alt: 'Image 1 Description' },
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
          {images.slice() // Create a shallow copy of the array to avoid modifying the original array
            .sort(() => Math.random() - 0.5) // Randomize the order
            .map((image, index) => (
            <SwiperSlide key={index} >
              <Image 
                src={image.src} 
                alt={image.alt}  
                className="w-full"
                width={500}
                height={300} />
              
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Carousel;

