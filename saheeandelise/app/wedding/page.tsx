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
import { VaraText } from './components/MyVaraText';
import CircleButton from './components/ClipPathButton';

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
                        <VaraText text="Welcome!" />
                    </div>
                </div>
                
                <MainParallax></MainParallax>

                <div className="my-5 bg-white">
                    
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative h-px-200 mt-4 bg-[url(https://www.filterforge.com/filters/1319.jpg)]" style={{
            borderImage: 'https://www.filterforge.com/filters/6903.jpg'
        }}>
                    <div className="flex justify-center items-center w-full">
                        <Link className="w-full flex justify-center items-center" href='/wedding/wedding-party'>
                            <CircleButton label="Wedding Party" number={0} />
                        </Link>
                        
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <Link className="w-full flex justify-center items-center" href='/wedding/our-story'>
                            <CircleButton label="Our Story" number={1} />
                        </Link>
                    </div>
                    <div className="h-60 hidden md:block"></div>
                    <div className="h-60 hidden md:block"></div>
                    <div className="h-60 hidden md:block"></div>
                    
                    
                </div>

                <div className="h-24"><Footer/></div>


            </div>

            </ParallaxProvider>

        </div>

    );
};
