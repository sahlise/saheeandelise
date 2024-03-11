"use client"
import React from 'react';
import CustomizedTimeline from '../components/ScheduleTimeline';
import StatBlock from '../components/Schedule/StatBlock';

import { GiDiamondRing } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";
import { IoMdPizza } from "react-icons/io";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMusicalNoteSharp } from "react-icons/io5";
import WeatherWidget from '../components/Schedule/Weather';
import MapWidget from '../components/Schedule/MapIframe';
import CountdownTimer from '../components/Countdown';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="w-full md:w-5/6 mt-4 flex flex-col items-center">
          <div className="text-4xl sm:text-5xl">Schedule</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <Image
              src="../../images/greenery.png"
              alt="Image of a vine as an underline"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <CustomizedTimeline></CustomizedTimeline>
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
          <CountdownTimer targetDate="2024-06-08T15:30:00" onInitialized={() => { console.log("yeah") }} />
        </div>
      </div>

      <div className=""><Footer /></div>
    </div>
  )
};
