'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HiArrowUturnLeft } from "react-icons/hi2";


interface PhotoFlippedProps {
  imagePath: string;
  wording: string;
}

const PhotoTextFlipCard: React.FC<PhotoFlippedProps> = ({ imagePath, wording }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick}>

        <div className="p-3" style={{ width: '100%', height: 'auto' }}>
          <p>{wording}</p>
          <div className="flex flex-col justify-center items-center p-1">
            <HiArrowUturnLeft />
            <p>Click me!</p>
          </div>
        </div>

      </div>

      <div onClick={handleClick}>
        <div className="p-3" style={{ width: '100%', height: 'auto' }}>
          <div className="flex justify-center items-center">
            <div className="md:w-1/2">
              <Image
                src={imagePath}
                alt="Image associate with front side"
                width={500}
                height={300}
                priority={true}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-1">
            <HiArrowUturnLeft />
            <p>Click me!</p>
          </div>
        </div>

      </div>
    </ReactCardFlip>
  );
};

export default PhotoTextFlipCard;
