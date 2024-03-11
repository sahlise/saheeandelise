import React, { useState, useEffect } from 'react';
import { VscTriangleDown } from "react-icons/vsc";
import './TextBox.css'

const RPGTextBox = () => {
    const fullText = "Behold adventurer - before you lies our quest board! Each flyer will lead to a trial to help you prepare for your journey with us! Click on a flyer below to learn more about the topic!";
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < fullText.length) {
            return prevIndex + 1;
          } else {
            clearInterval(intervalId);
            return prevIndex;
          }
        });
      }, 50); // Adjust the speed by changing the interval time
  
      return () => clearInterval(intervalId);
    }, [fullText.length]);

    const completeText = () => {
        setCurrentIndex(fullText.length);
      };

  return (
    <div className="flex justify-center items-center w-full my-2 md:my-4">
      <div className="flex flex-col justify-center items-center w-5/6 md:w-1/2 no-tap-highlight" onClick={completeText} style={{ cursor: 'pointer' }} >
        <div className=" items-start w-full">
          <div className="border-4 border-b-0 border-black w-1/2 md:w-1/4 rounded-t p-2 text-center font-bold bg-[url('/images/paper.png')] bg-center bg-cover">
            Sahee and Elise
          </div>
        </div>
        <div className="border-4 border-black bg-center bg-cover text-xl flex flex-col justify-center items-center mb-4 md:my-0 w-full bg-[url('/images/paper.png')] text-black p-4 rounded transform transition clip-polygon rounded-tl-none">
          <span className="">{fullText.substring(0, currentIndex)}</span>
          <div className="flex justify-end items-end w-full mr-4 md:mr-8">
            <div className="bounce">
            {currentIndex === fullText.length && <VscTriangleDown />}
            </div>
          </div>                  
        </div>
      </div>
    </div>
  );
};

export default RPGTextBox;
