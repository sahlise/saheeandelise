// pages/index.js
'use client'
import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CountdownTimer from './components/Countdown';
import MainParallax from './components/Parallax'
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Page() {

    const totalComponents = 2; // Total number of components to load
    const [loadedComponentsCount, setLoadedComponentsCount] = useState(0);

    const handleComponentLoaded = () => {
        setLoadedComponentsCount(prevCount => prevCount + 1);
    };

    const allComponentsLoaded = loadedComponentsCount === totalComponents;

    return (
        
        <div className="bg-white">
            <ParallaxProvider>
      
            <div className="">
                <div className="relative bg-white">
                    <div className="opacity-90">
                        <Carousel></Carousel>
                    </div>

                    <div className="h-full w-full bg-black opacity-30 absolute inset-0 flex"></div>

                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-6xl sm:text-9xl text-white">Welcome</p>
                    </div>
                </div>
                
                <MainParallax></MainParallax>

                <div className=" my-5 bg-white">
                    
                </div>

                <div className="relative">
                    <div className="opacity-100">
                        <Image 
                            src={"/images/poster_image.jpg"} 
                            alt={"Countdown"} 
                            className="w-full md:w-3/4 md:mx-auto"
                            width={500}
                            height={300} /> {/* Tailwind class for width */}
                    </div>

                    <div className="absolute inset-x-0 bottom-10 md:bottom-20 md:text-2xl flex justify-center">
                        <CountdownTimer targetDate="2024-06-08" onInitialized={handleComponentLoaded} />
                    </div>
                </div>

                <div className="h-24"><Footer/></div>


            </div>

            </ParallaxProvider>

        </div>

    );
};
