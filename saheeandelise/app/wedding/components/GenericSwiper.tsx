// components/CountdownTimer.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface Image {
  src: string, 
  alt: string
}

interface SwiperProps {
  images: Image[]; 
}

const GenericSwiper: React.FC<SwiperProps> = ({ images }) => {


  const [loadedImagesCount, setLoadedImagesCount] = useState(false);

  const handleImageLoaded = () => {
    console.log("Added image")
    setLoadedImagesCount(true);
  };

  return (
    <div className=  {loadedImagesCount ? 'visible overflow-hidden' : 'collapse'}>
      <Swiper
        modules={[Navigation, Pagination]}
        onSlidesLengthChange={handleImageLoaded}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image 
              src={image.src} 
              alt={image.alt}
              width={500}
              height={300} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GenericSwiper;
