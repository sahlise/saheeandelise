'use client'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper"
import 'swiper/css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';

const paragraph = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



const ImageTextSwiper = () => {
    const images = [
        { 
            src: '/images/anna.jpg', 
            text: "Anna is Elise's best older sister, but not older by much (we are almost irish twins!). Because of this, we were a pair of little ruffians growing up, always getting into trouble but giggling along the way. Now-a-days when she isn't experimenting with new cooking recipes, you can find Anna reading thriller or mystery books while hanging out with her cat Nea. Anna and her husband Connor also love to travel to fun and wacky places around the US. If you have a chance, ask them about their adventures to US National Parks.",
            gif: '/images/mary.gif' 
        },
        { 
            src: '/images/javit.jpg', 
            text: 'Javit' + paragraph,
            gif: '/images/mary.gif' 
        },
        { 
            src: '/images/mary.jpg', 
            text: "Mary is Elise's best younger sister, and Elise's favorite buddy to play with toys when we were growing up. We would play Polly Pockets and Littlest Pet Shop for hours! These days you can catch Mary baking bread and sweet treats, reading boatloads of books, or putting together legos (sometimes all at the same time 🙂) . Mary also loves crafting - crochet, book binding, cricutting, you name it! If you see Mary around feel free to ask her what craft project she is currently working on!", 
            gif: '/images/mary.gif' 
        },
        { 
            src: '/images/kinji.jpg', 
            text: 'Kinji' + paragraph, 
            gif: '/images/mary.gif' 
        },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectImage = (image: typeof images[number]) => {
        setSelectedImage(image);
    };

    const swiperRef = useRef<SwiperCore>();

    const sliderSettings = {
        200: {
            spaceBetween: 20
        },
        440: {
            spaceBetween: 30,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    };

    return (
        <div>
            <div className="image-view outline p-4 mb-5">
                <div className="container mx-auto grid grid-auto-rows grid-cols-3 gap-4">
                    {/* First Row, First Column (Taking up 2/3 width) */}
                    <div className="col-span-2 row-span-1">
                        {/* Content */}
                        <div className="outline h-full">
                            <Image 
                                className="h-full" 
                                src={selectedImage.gif} 
                                alt="Selected" 
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>

                    {/* First Row, Second Column (Taking up 1/3 width) */}
                    <div className="col-span-1">
                        {/* Content */}
                        <Image 
                            src={selectedImage.src} 
                            alt="Selected" 
                            width={500}
                            height={300}
                        />
                    </div>

                    {/* Second Row, Full-width */}
                    <div className="col-span-3">
                        {/* Text content */}
                        <p>{selectedImage.text}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto outline bg-amber-700">
                <div className="flex flex-row py-2">
                    <div className="w-1/5">
                        {/* Content for the first column */}
                        <button className="h-full w-full flex items-center justify-center" onClick={() => swiperRef.current?.slidePrev()}>
                            <AiOutlineArrowLeft size={25} />
                        </button>
                    </div>

                    <div className="w-3/5">
                        {/* Content for the second column */}
                        <Swiper

                            loop={true}
                            slidesPerView={3}
                            breakpoints={sliderSettings}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}>
                            {images.map((image, index) => (
                                <SwiperSlide key={index} onClick={() => selectImage(image)}>
                                    <Image 
                                        src={image.src} 
                                        alt={`Slide ${index}`} 
                                        width={500}
                                        height={300}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="w-1/5">
                        {/* Content for the third column */}
                        <button className="h-full w-full flex items-center justify-center" onClick={() => swiperRef.current?.slideNext()}>
                            <AiOutlineArrowRight size={25} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImageTextSwiper;
