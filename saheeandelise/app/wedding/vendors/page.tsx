// pages/index.js
import Link from 'next/link';
import React from 'react';
import { BsMusicPlayerFill } from "react-icons/bs";
import { FaCamera } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { GiBarn } from "react-icons/gi";
import { LuFlower2 } from "react-icons/lu";
import { GiAmpleDress } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import { GiDiamondRing } from "react-icons/gi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import "./style.css"

export default function Page() {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      
      <div className="block md:hidden flex flex-col justify-center items-center my-6">
          <div className="text-center flex justify-center items-center text-4xl h-full titleText">Vendors</div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 mx-4 mb-4 md:mt-4 md:w-3/4">

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><FaCamera /></p>
          <p className="text-center font-bold">Photographers</p>
          <p className="text-center">A&J Photography</p>
          <Link className="text-center underline" href="https://www.ajphotographyinc.com/">Website</Link>
        </div>

        <div className="hidden md:block col-span-2 flex flex-col justify-center items-center">
          <div className="text-center flex justify-center items-center text-4xl h-full titleText">Vendors</div>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><GiBarn /></p>
          <p className="text-center font-bold">Venue</p>
          <p className="text-center">Swan Barn Door</p>
          <Link className="text-center underline" href="https://theswanbarndoor.com/">Website</Link>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><BsMusicPlayerFill /></p>
          <p className="text-center font-bold">DJ</p>
          <p className="text-center">Xtreme Sound</p>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><FaClipboardList /></p>
          <p className="text-center font-bold">Coordinator</p>
          <p className="text-center">Candace Blakeslee</p>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><LuFlower2 /></p>
          <p className="text-center font-bold">Flowers</p>
          <p className="text-center">Davilee Firari</p>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><GiAmpleDress /></p>
          <p className="text-center font-bold">Bridal Dress</p>
          <p className="text-center">Vera&apos;s Bridal</p>
          <Link className="text-center underline" href="https://www.verasbridals.com/">Website</Link>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><GiDress /></p>
          <p className="text-center font-bold">Bridesmaid Dresses</p>
          <p className="text-center">Brandi&apos;s Bridal Galleria</p>
          <Link className="text-center underline" href="https://www.brandisbridal.com/">Website</Link>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><FaUserTie /></p>
          <p className="text-center font-bold">Suit</p>
          <p className="text-center">Men&apos;s Warehouse</p>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><GiDiamondRing /></p>
          <p className="text-center font-bold">Ring Making</p>
          <p className="text-center">Jewelers Guild</p>
          <Link className="text-center underline" href=" https://www.jewelersguild.biz">Website</Link>
        </div>

        <div className="bg-weddingMaroon text-white px-4 py-3 rounded flex flex-col justify-center items-center">
          <p className="py-1"><HiMiniComputerDesktop /></p>
          <p className="text-center font-bold">Website</p>
          <p className="text-center">Sahee and Elise &lt;3</p>
        </div>
        

      </div>
    </div>
  )
};
