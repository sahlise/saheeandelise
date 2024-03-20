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
import PaperButton from './components/ClipPathButton';
import LongClipPath from './components/LongClipPath';
import RPGTextBox from './components/TextBox';
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
                    <div className="flex justify-center items-center w-full">
                    <MainParallax></MainParallax>
                    </div>
                    

                    <div className="my-5 bg-white">

                    </div>

                    
                    <RPGTextBox/>
                    
                    
                    <div className="relative h-px-200 mt-4 bg-[url(/images/wood-background.png)]">
                        <div className="">
                            <LongClipPath label={'QUEST BOARD'} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex justify-center items-center w-full">
                                <Link className="w-full flex justify-center items-center" href='/wedding/rsvp'>
                                    <PaperButton label="RSVP by May 8th" number={0} />
                                </Link>
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <Link className="w-full flex justify-center items-center" href='/wedding/faq'>
                                    <PaperButton label="FAQ" number={1} />
                                </Link>
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <Link className="w-full flex justify-center items-center" href='/wedding/wedding-party'>
                                    <PaperButton label="Wedding Party" number={0} />
                                </Link>

                            </div>
                            <div className="flex justify-center items-center w-full">
                                <Link className="w-full flex justify-center items-center" href='/wedding/our-story'>
                                    <PaperButton label="Our Story" number={1} />
                                </Link>
                            </div>
                            

                            <div className="h-60 hidden md:block"></div>
                            <div className="h-60 hidden md:block"></div>
                            <div className="h-60 hidden md:block"></div>
                        </div>




                    </div>

                    <div className=""><Footer /></div>


                </div>

            </ParallaxProvider>

        </div>

    );
};
