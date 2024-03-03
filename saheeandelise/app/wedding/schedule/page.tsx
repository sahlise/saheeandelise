
import React from 'react';
import CustomizedTimeline from '../components/ScheduleTimeline';
import StatBlock from '../components/Schedule/ScheduleStatBlock';

import { GiDiamondRing } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";
import { IoMdPizza } from "react-icons/io";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMusicalNoteSharp } from "react-icons/io5";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="w-full md:w-5/6 flex flex-col items-center">
        <div className="text-4xl sm:text-5xl">Schedule</div>
        {/* <CustomizedTimeline></CustomizedTimeline> */}
        <div className="md:grid md:grid-cols-5 md:gap-1 w-full">
          {/* Timeline */}
          <div className="md:col-span-2">
            <StatBlock label={'Ceremony'} icon={<GiDiamondRing />} time={'3:30pm'}></StatBlock>
          </div>

          {/* Widgets */}
          <div className="md:col-span-3 bg-weddingGreen">

          </div>

        </div>
        </div>
        
      </div>

    </div>
  )
};
