"use client";

import React, { useState } from 'react';
import { SiTarget } from "react-icons/si";
import { IoLogoAmazon } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Page() {
  const iconColor = '#570034' //this is wedding maroon
  const [isAmazonHovered, setAmazonIsHovered] = useState(false);
  const [isTargetHovered, setTargetIsHovered] = useState(false);

  return (
    <div className="h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mt-10">
          <div className="w-3/4">
            <Image
              className="bg-white bg-none"
              src="../../images/registry-flower.png"
              alt="Image of a flower in Art Nouveau style"
              width={300}
              height={200}
            />
          </div>
        </div>
        <h1 className="text-5xl mt-3 text-weddingMaroon">Registry</h1>
        <div className="w-3/4 md:w-1/2 text-xl text-center mt-3">Your presence at our wedding surpasses any present. If you&apos;re wishing to give more, we&apos;ve created some online registries for inspiration.</div>
        <div className="grid md:grid-cols-2 md:gap-3 mx-3 my-5 w-1/2">
          <div className="m-4">
            <Link 
              href="https://www.amazon.com/wedding/share/sahee-and-elise"
              onMouseEnter={() => setAmazonIsHovered(true)}
              onMouseLeave={() => setAmazonIsHovered(false)}
              className="flex justify-center items-center 
                border-solid border-2 border-weddingMaroon 
                rounded-full hover:bg-weddingMaroon 
                text-weddingMaroon hover:text-white">
              <IoLogoAmazon className="m-2"
                color={isAmazonHovered ? 'white' : iconColor} 
                fontSize="1.5em"/>
              <div>Amazon</div>
            </Link>
          </div>
          <div className="m-4">
            <Link
              href="https://www.target.com/gift-registry/gift/sahee-and-elise"
              onMouseEnter={() => setTargetIsHovered(true)}
              onMouseLeave={() => setTargetIsHovered(false)}
              className="flex justify-center items-center 
              border-solid border-2 border-weddingMaroon 
              rounded-full hover:bg-weddingMaroon 
              text-weddingMaroon hover:text-white">
              <SiTarget className="m-2"
                color={isTargetHovered ? 'white' : iconColor} 
                fontSize="1.5em"/>
                <div>Target</div>
            </Link>
          </div>
        </div>

      </div>

      <div className=""><Footer /></div>
    </div>
  )
};
