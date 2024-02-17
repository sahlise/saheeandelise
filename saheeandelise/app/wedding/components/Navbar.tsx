"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    
    return (
        
        <nav className="w-full h-24 shadow-xl bg-white dark:text-black z-10">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href='/wedding'>
                    <div>Logo Placeholder</div>
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href='/wedding/wedding-party'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Wedding Party</li>
                        </Link>
                        <Link href='/wedding/venue'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Venue</li>
                        </Link>
                        <Link href='/wedding/our-story'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Our Story</li>
                        </Link>
                        <Link href='/wedding/rsvp'>
                            <li className="ml-10 uppercase hover:border-b text-xl">RSVP</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen 
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p10 ease-in duration-500 z-10"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-10"
                }
            >
                <div className="flex w-full items-center justify-end p-4">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4 px-4">
                    <ul>
                        <Link href="/wedding">
                            <li
                            onClick={() => setMenuOpen(false)}
                            className="py-4 cursor-pointer">
                                Home
                            </li>
                        </Link>
                        <Link href="/wedding/wedding-party">
                            <li
                            onClick={() => setMenuOpen(false)}
                            className="py-4 cursor-pointer">
                                Wedding Party
                            </li>

                            
                        </Link>
                        <Link href="/wedding/venue">
                            <li
                            onClick={() => setMenuOpen(false)}
                            className="py-4 cursor-pointer">
                                Venue
                            </li>
                        </Link>
                        <Link href="/wedding/our-story">
                            <li
                            onClick={() => setMenuOpen(false)}
                            className="py-4 cursor-pointer">
                                Our Story
                            </li>
                        </Link>
                        <Link href="/wedding/rsvp">
                            <li
                            onClick={() => setMenuOpen(false)}
                            className="py-4 cursor-pointer">
                                RSVP
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar