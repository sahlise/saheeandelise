"use client";

import React, { useState } from 'react';
import MyDropzone from '../components/PhotoUpload';

export default function Page() {

  return (
    <div className="h-full">
        <MyDropzone></MyDropzone>
    </div>
  )
};
