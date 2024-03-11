"use client";

import React from "react";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

const Footer = () => {
    
    
    return (
        
        <nav className="w-full h-18 shadow-xl bg-weddingTan dark:text-black z-10">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="flex items-start justify-center">
                <Link className="h-full p-4" href='/wedding/contact-us'>
                    <div>Contact Us</div>
                </Link>
                <Link className="p-4 text-xl text-black" href='/wedding'>
                    <TiHome className="stroke-black stroke-1"/>
                </Link>
                </div>
                
                <div>
                    Sahee and Elise &lt;3
                </div>
            </div>
        </nav>
    );
};

export default Footer