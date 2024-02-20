'use client'

import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaArrowAltCircleRight } from "react-icons/fa";

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
          <div className="flex justify-end items-center p-1"><FaArrowAltCircleRight /></div>
        </div>

      </div>

      <div onClick={handleClick}>
        <div className="p-3" style={{ width: '100%', height: 'auto' }}>
          <img src={imagePath}></img>
          <div className="flex justify-end items-center p-1"><FaArrowAltCircleRight /></div>
        </div>
        
      </div>
    </ReactCardFlip>
  );
};

export default PhotoTextFlipCard;
