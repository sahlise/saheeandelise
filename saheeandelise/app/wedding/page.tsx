// pages/index.js
'use client'
import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CountdownTimer from './components/Countdown';

export default function Page() {    

    const totalComponents = 2; // Total number of components to load
    const [loadedComponentsCount, setLoadedComponentsCount] = useState(0);

  const handleComponentLoaded = () => {
    setLoadedComponentsCount(prevCount => prevCount + 1);
  };

  const allComponentsLoaded = loadedComponentsCount === totalComponents;

    return (
        <div>
            <div className="relative">
                <div className="opacity-60">
                    <Carousel></Carousel>
                </div>
                
                <div className="absolute inset-0 flex justify-center items-center">
                    <p className="text-6xl sm:text-9xl">Welcome</p>
                </div>
            </div>

            <div className="p-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. In cursus turpis massa tincidunt. Ac auctor augue mauris augue neque gravida in fermentum. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Dictum non consectetur a erat nam at. Dui vivamus arcu felis bibendum ut. Amet porttitor eget dolor morbi non arcu risus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Dui ut ornare lectus sit amet. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Urna molestie at elementum eu facilisis sed odio morbi quis. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Vulputate sapien nec sagittis aliquam malesuada. Dolor purus non enim praesent elementum facilisis leo vel. Neque volutpat ac tincidunt vitae. Risus sed vulputate odio ut enim. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.
                Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Augue lacus viverra vitae congue eu consequat ac felis donec. Adipiscing elit pellentesque habitant morbi tristique senectus et. Augue mauris augue neque gravida in fermentum. Libero enim sed faucibus turpis in eu. Odio pellentesque diam volutpat commodo sed egestas. Risus commodo viverra maecenas accumsan lacus vel. Sed risus pretium quam vulputate. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Justo eget magna fermentum iaculis eu non diam phasellus. Volutpat ac tincidunt vitae semper quis lectus. Fringilla ut morbi tincidunt augue interdum velit euismod. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Velit laoreet id donec ultrices. Tristique risus nec feugiat in fermentum posuere. Suspendisse ultrices gravida dictum fusce ut placerat.
            </div>

            <div className="relative">
                <div className="opacity-100">
                    <img src={"/images/poster_image.jpg"} alt={"Countdown"} className="w-full md:w-3/4 md:mx-auto" /> {/* Tailwind class for width */}
                </div>

                <div className="absolute inset-x-0 bottom-10 md:bottom-20 md:text-2xl flex justify-center">
                    <CountdownTimer targetDate="2024-06-08" onInitialized={handleComponentLoaded}/>
                </div>
            </div>

            
        </div>
        
    );
};
