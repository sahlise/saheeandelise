'use client'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper"
import 'swiper/css';
import { GiImbricatedArrows } from "react-icons/gi";
import Image from 'next/image';

const paragraph = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



const ImageTextSwiper = () => {
    const images = [
        {
            src: '/images/Anna.png',
            srcCrop: '/images/Anna-crop.png',
            iconSrc: '/images/Anna-icon.png',
            text: "Anna is Elise's best older sister, but not older by much (we are almost irish twins!). Because of this, we were a pair of little ruffians growing up, always getting into trouble but giggling along the way. Now-a-days when she isn't experimenting with new cooking recipes, you can find Anna reading thriller or mystery books while hanging out with her cat Nea. Anna and her husband Connor also love to travel to fun and wacky places around the US. If you have a chance, ask them about their adventures to US National Parks.",
            title: 'Anna Baumgartner'
        },
        {
            src: '/images/javit.jpg',
            srcCrop: '/images/javit-crop.jpg',
            iconSrc: '/images/javit-icon.jpg',
            text: 'Javit' + paragraph,
            title: 'Javit Thao'
        },
        {
            src: '/images/Mary.png',
            srcCrop: '/images/Mary-crop.png',
            iconSrc: '/images/Mary-icon.png',
            text: "Mary is Elise's best younger sister, and Elise's favorite buddy to play with toys when we were growing up. We would play Polly Pockets and Littlest Pet Shop for hours! These days you can catch Mary baking bread and sweet treats, reading boatloads of books, or putting together legos (sometimes all at the same time 🙂) . Mary also loves crafting - crochet, book binding, cricutting, you name it! If you see Mary around feel free to ask her what craft project she is currently working on!",
            title: 'Mary Baumgartner'
        },
        {
            src: '/images/kinji.jpg',
            srcCrop: '/images/kinji-crop.jpg',
            iconSrc: '/images/kinji-icon.jpg',
            text: 'Kinji' + paragraph,
            title: 'Kinji Thao'
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
            <div className="mb-5">

                <div className="container mx-auto relative">
                    <div className="absolute inset-0 bg-[url('/images/forest.png')] bg-no-repeat bg-cover bg-center blur-sm"></div>

                    {/* <!-- Adding an overlay layer to prevent interaction with the background --> */}
                    <div className="absolute inset-0 bg-transparent"></div>

                    {/* <!-- Your content goes here, ensure it's placed after the background div so it appears on top --> */}
                    <div className="relative z-10">
                        <div className="md:grid md:grid-rows-3 md:grid-flow-col">
                            <div className="md:row-span-3">
                                <div className="h-full flex flex-col justify-center items-center">
                                    <img src={selectedImage.src} alt="Selected" className="block my-2 md:hidden w-auto h-48 md:h-128" />
                                    <img src={selectedImage.srcCrop} alt="Selected" className="hidden md:block w-auto h-48 md:h-128" />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <div className="text-white font-bold text-xl md:text-4xl my-2 h-full flex flex-col justify-center items-center">
                                    {selectedImage.title}
                                </div>

                            </div>
                            <div className="md:row-span-2 md:col-span-2">
                                <p className="text-white bg-black mx-4 bg-opacity-50 p-4 my-2 rounded-lg md:text-lg">{selectedImage.text}</p>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto relative bg-white bg-opacity-50 z-20 rounded-b-lg">
                        <div className="flex flex-row py-2">
                            <div className="w-1/5">
                                {/* Content for the first column */}
                                <button className="h-full w-full flex items-center justify-center" onClick={() => swiperRef.current?.slidePrev()}>
                                    <GiImbricatedArrows size={30} style={{transform: 'rotate(135deg)' }} />
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
                                                src={image.iconSrc}
                                                alt={`Slide ${index}`}
                                                width={500}
                                                height={300} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="w-1/5">
                                {/* Content for the third column */}
                                <button className="h-full w-full flex items-center justify-center" onClick={() => swiperRef.current?.slideNext()}>
                                    <GiImbricatedArrows size={30} style={{transform: 'rotate(-45deg)' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageTextSwiper;
