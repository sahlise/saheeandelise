"use client";

import React, { useState } from 'react';
import PhotoUpload from '../../components/PhotoUpload';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from "react-icons/io";
import Modal from '../../components/Modal';

export default function Page() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false)


  return (
    <div className="h-full">
      <div className="min-h-screen">
        <div>
          <div className="flex items-center mt-8 ml-4 md:text-lg text-weddingMaroon hover:underline hover:cursor-pointer"
            onClick={() => { router.push('/wedding/photo/gallery') }}>
            <IoIosArrowBack /> Back to Gallery
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl mt-3 text-weddingMaroon">Share Your Photos</h1>
        </div>

        <div className={`${showModal ? 'visible' : 'hidden'}`}>
          <Modal
            positiveButtonAction={function (): void { setShowModal(false); } }
            positiveButtonText={'Yes, upload more'}
            negativeButtonAction={function (): void {
              router.push('/wedding/photo/gallery');
              setShowModal(false);
            } }
            negativeButtonText={'No, take me to the gallery'}
            titleText={'Upload complete!'}
            bodyText={'Your photos/videos have been uploaded successfully! Do you want to upload more?'} 
            openModal={showModal}/>
        </div>


        <PhotoUpload 
          uploadComplete={function (): void {
            setShowModal(true)
        }}></PhotoUpload>
      </div>
      <Footer></Footer>
    </div>
  )
};
