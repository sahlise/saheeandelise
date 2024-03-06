// pages/index.js
import React from 'react';
import ImageTextSwiper from '../components/ImageTextSlider';
//import Link from 'next/link';

export default function Page() { return (
  <div className="bg-white flex flex-col justify-center items-center">
    {/* <h1 className="text-4xl m-4">Guardians of the Gala: Unveil the Wedding Warriors</h1> */}
    <div className="w-3/4 my-4">
      <ImageTextSwiper></ImageTextSwiper>
    </div>
    
  </div>
)
};
