// pages/index.js
'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import './Carousel.css'
import Image from 'next/image';

interface ImageProp {
  id: number;
  src: string;
  alt: string; 
}

const initialImages = [
  { id: 0, src: '/images/collages/0.jpg', alt: '3 image collage: Elise and Sahee at a Packer game, Sahee running from a dino, Elise under an Orange Julius sign' },
  { id: 1, src: '/images/collages/1.jpg', alt: '3 image collage: Young Sahee in a winter hat, young Sahee in Hmong clothes in a garden, young Sahee standing on one leg' },
  { id: 2, src: '/images/collages/2.jpg', alt: '4 image collage: High school Elise holding an antique gun, young Sahee on a ride aiming a gun, high school Elise cast image, high school Sahee on a bench' },
  { id: 3, src: '/images/collages/3.jpg', alt: '3 selfie image collage: Elise and Sahee in Brazil, Elise and Sahee smirking, Elise smiling and Sahee yawning' },
  { id: 4, src: '/images/collages/4.jpg', alt: '3 image collage: Sahee with a tall stick, Elise and Sahee with minigolf, Elise on some playground equipment' },
  { id: 5, src: '/images/collages/5.jpg', alt: '3 image Elise collage: preschool Elise on a chair with crossed ankles, baby Elise in a swimsuit, young Elise with a chef hat' },
  { id: 6, src: '/images/collages/6.jpg', alt: '4 image collage: Young Sahee on a playset, baby Elise on a blanket outside, Elise 8th grade graduation picture, teenage Sahee with a paper mustache' },
  { id: 7, src: '/images/collages/7.jpg', alt: '4 image collage: Elise and Sahee at a wedding, Elise and Sahee with a tandem bike, Elise and Sahee in front of a giant cob of corn, Elise and Sahee selfie' },
  { id: 8, src: '/images/collages/8.jpg', alt: '4 image collage: Elise and Sahee selfie with ice cream, Sahee with funny hair, Elise with funny hair, Elise and Sahee collage graduation' },
  { id: 9, src: '/images/collages/9.jpg', alt: '3 image collage: Elise and Sahee in Mt Zion National Park, Selfie of Elise and Sahee on facetime, Elise standing on a rock in a pond' },
  { id: 10, src: '/images/collages/10.jpg', alt: '4 image collage: Elise and Sahee wiht matching shirts, Sahee in front of giant hexnut, Elise in a groutfit, Elise and Sahee in front of a Christmas tree' },
  { id: 11, src: '/images/collages/11.jpg', alt: '4 image collage: Elise and Sahee by a parking sign, Elise and Sahee engaged, Elise and Sahee in halloween costumes, Elise and Sahee winter selfie' },
  { id: 12, src: '/images/collages/12.jpg', alt: '4 image collage: Young Sahee with a fishing pole, young Elise with funny hair, baby Elise with a face full of spaghetti, Young sahee with a mingolf club' },
  { id: 13, src: '/images/collages/13.jpg', alt: '4 imge collage: Middle school Sahee in an innertube, younge Elise with swimming goggles, young Sahee waving, young Elise in water wings' },
  { id: 15, src: '/images/collages/15.jpg', alt: '3 image collage: Elise and Sahee dressed up, Elise and Sahee in Italy, Elise and Sahee back to back with Hmong clothes' },
  { id: 16, src: '/images/collages/16.jpg', alt: '4 image collage: Elise and Sahee in front of Lake Michigan, Sahee next to a garbage can, Elise with a moped helmet, Elise and Sahee at a roller rink' },
  { id: 17, src: '/images/collages/17.jpg', alt: '5 image collage: Elise and Sahee as Lana Lang and Clark Kent, Elise and Sahee at a wedding, Elise with a snake statue, Sahee with a bear statue, Elise and Sahee at Devils Lake' },
  { id: 18, src: '/images/collages/18.jpg', alt: '5 image collage: Elise and Sahee in front of stairs, Elise and Sahee canoeing holding an oar, Elise and Sahee selfie, Elise and Sahee holding twins, Elise and Sahee at a coding workshop' },
  { id: 19, src: '/images/collages/19.jpg', alt: '4 image collage: Young Sahee with a turtle, high school Elise holding a parrot, young Sahee in a car with sunglasses, young Elise with funny sunglasses' },
  { id: 20, src: '/images/collages/20.jpg', alt: '5 image collage: Elise and Sahee holding jalapenos corn dogs, Elise and Sahee on stairs, Elise and Sahee hold corndogs like swords, selfie of Sahee kissing Elises cheek, Elise and Sahee in Hmong clothes' },
  { id: 21, src: '/images/collages/21.jpg', alt: '4 image collage: Young Sahee with a sword, young Elise on a ferry, young Elise with a bag on her head, young sahee with a balloon hat on his head' },
];

SwiperCore.use([Autoplay]);
const Carousel: React.FC = () => {

  const [slides, setSlides] = useState(initialImages);

  const [loadedImagesCount, setLoadedImagesCount] = useState(false);

const handleImageLoaded = () => {
 console.log("Added image")
  setLoadedImagesCount(true);
};

function shuffleArray(array: ImageProp[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

useEffect(() => {
  // Shuffle slides and update state
  const shuffledSlides = shuffleArray(slides);
  setSlides(shuffledSlides);
}, []); // Empty dependency array ensures this runs once on mount


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
          {slides.map((image, index) => (
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

