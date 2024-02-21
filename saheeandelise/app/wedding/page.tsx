// pages/index.js
'use client'
import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CountdownTimer from './components/Countdown';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Page() {

    const totalComponents = 2; // Total number of components to load
    const [loadedComponentsCount, setLoadedComponentsCount] = useState(0);

    const handleComponentLoaded = () => {
        setLoadedComponentsCount(prevCount => prevCount + 1);
    };

    const allComponentsLoaded = loadedComponentsCount === totalComponents;

    return (
        <div className="parallax-container">
            <div className="background-image">
            </div>
            <div className="text-content">
                <div className="relative bg-white">
                    <div className="opacity-80">
                        <Carousel></Carousel>
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-6xl sm:text-9xl">Welcome</p>
                    </div>
                </div>

                <div className=" my-5 bg-white">
                    <div className="p-5 md:text-xl">
                    Welcome, dear traveler, to our humble wedding website. 
                    We&apos;ve crafted this site as a portal into our story, sprinkling it with delightful 
                    details and fun facts for you to discover and enjoy. Within these pages, 
                    you&apos;ll find everything you need to know about our special day—from the enchanting 
                    venue to the day&apos;s schedule, and more. If you have any troubles with our site, please 
                    don&apos;t hesitate to reach out to us using the Contact Us page provided. 
                    We&apos;re eagerly anticipating the joy of embarking on this journey with you.
                    </div>
                    {/* <img src={"/images/branch-divider.png"}/> */}
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

        </div>

    );
};
