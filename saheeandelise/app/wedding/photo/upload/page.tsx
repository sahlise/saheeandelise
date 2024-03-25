"use client";

import React, { useState } from 'react';
import MyDropzone from '../../components/PhotoUpload';
import Footer from '../../components/Footer';

export default function Page() {

  return (
    <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl mt-3 text-weddingMaroon">Share Your Photos</h1>
        </div>
        <MyDropzone></MyDropzone>
        <Footer></Footer>
    </div>
  )
};
