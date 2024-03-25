"use client";

import React, { useState } from 'react';
import MyDropzone from '../../components/PhotoUpload';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  const router = useRouter();
  return (
    <div className="h-full">
      <div  className="min-h-screen">
        <div>
          <div className="flex items-center mt-4 ml-4 md:text-lg text-weddingMaroon hover:underline hover:cursor-pointer" 
          onClick={() => {router.push('/wedding/photo/gallery')}}>
           <IoIosArrowBack /> Back to Gallery
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl mt-3 text-weddingMaroon">Share Your Photos</h1>
        </div>
        <MyDropzone></MyDropzone>
      </div>
        <Footer></Footer>
    </div>
  )
};
