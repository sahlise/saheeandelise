"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    
    
    return (
        
        <nav className="w-full h-24 shadow-xl bg-white dark:text-black z-10">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href='/wedding/contact-us'>
                    <div>Contact Us</div>
                </Link>
                <div>
                    Sahee and Elise &lt;3
                </div>
            </div>
        </nav>
    );
};

export default Footer