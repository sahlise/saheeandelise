// pages/index.js
'use client'
import React from 'react';
import Footer from '../components/Footer';
import Accoridon from '../components/Accordion';

export default function Page() {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl mt-3 text-weddingMaroon">Fequently Asked Questions</h1>
      <div className="w-3/4 md:w-1/2">
        <Accoridon/>
      </div>
      

      <div className="w-full"><Footer /></div>
    </div>
  )
};
