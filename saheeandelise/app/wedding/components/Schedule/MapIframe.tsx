"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function MapWidget() {
    return (
        <div className="w-full h-full">
            <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAZstezTJw7aTsWOilNppnuDeZHyxbrT9o&q=Swan+barn+door">
            </iframe>
        </div>

    )
}