'use client'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper"
import 'swiper/css';
import { GiImbricatedArrows } from "react-icons/gi";
import Image from 'next/image';



const ImageTextSwiper = () => {
    const images = [
        {
            src: '/images/Anna.png',
            srcCrop: '/images/Anna-crop.png',
            iconSrc: '/images/Anna-icon.png',
            text: "Anna is Elise's best older sister, but not older by much (we are almost Irish twins!). Because of this, we were a pair of little ruffians growing up, always getting into trouble but giggling along the way. Now-a-days when she isn't trying out a new recipe from one of her cookbooks, you can find Anna reading thriller or mystery books while hanging out with her cat Nea. Anna and her husband Connor also love to travel to fun and wacky places around the US. If you have a chance, ask them about their adventures to US National Parks.",
            title: 'Anna Baumgartner'
        },
        {
            src: '/images/javit.jpg',
            srcCrop: '/images/javit-crop.jpg',
            iconSrc: '/images/javit-icon.jpg',
            text: "For five years, Sahee enjoyed the life of an only child, a reign that ended with the arrival of his brother, Javit. This brought a new companion into Sahee's world, one with whom he could share his love for trains and cars. As they grew, their toy battles evolved into virtual competitions, particularly in Super Smash Bros, where Sahee initially dominated. However, time has a way of changing dynamics, and nowadays, it's Javit who holds the title of master, with Sahee proudly taking on the role of the apprentice. When Javit isn't immersed in his medical school studies, you're likely to find him engrossed in deck-building and roguelike games, honing his artistic skills through drawing, enjoying music, or keeping up with the latest anime.",
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
            text: "Kinji, Sahee's youngest brother, has always held a special place in Sahee's world, despite the eight-year age gap. Yet, this gap never truly separated them; Sahee cherished every moment with Kinji by his side, whether it was watching shows or YouTube together, or Kinji watching Sahee play video games. Today, Kinji loves playing instruments (he is currently into guitar and ukulele), gaming on his PC, and experimenting with new recipes and flavors in the kitchen.",
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
                                <div className="text-white font-bold text-xl md:text-4xl mt-2 md:mt-0 h-full w-3/4 md:w-1/2 flex flex-col justify-end">
                                    <div className="bg-black mx-4 bg-opacity-50 px-4 py-2 rounded-t-lg">{selectedImage.title}</div>
                                </div>

                            </div>
                            <div className="md:row-span-2 md:col-span-2">
                                <p className="text-white bg-black mx-4 bg-opacity-50 p-4 mb-2 rounded-lg md:text-lg rounded-tl-none">{selectedImage.text}</p>
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
