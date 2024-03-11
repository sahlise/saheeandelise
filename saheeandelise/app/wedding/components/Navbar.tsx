"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"
import "./navBar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (

        <nav className="w-full h-24 shadow-xl bg-weddingTan dark:text-black z-10">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href='/wedding'>
                    <div className="logo-container">
                        <svg width="140" height="140" viewBox="0 0 140 140" className="circle-svg">
                            <circle id="c1" cx="70" cy="70" r="36" stroke="black" strokeWidth="2" fill="transparent" strokeLinecap="round" strokeDasharray="150 176.4" strokeDashoffset="120"></circle>
                            <circle id="c2" cx="70" cy="70" r="42" stroke="black" strokeWidth="2" fill="transparent" strokeLinecap="round" strokeDasharray="182.212 182.212" strokeDashoffset="20"></circle>
                            <circle id="c3" cx="70" cy="70" r="50" stroke="black" strokeWidth="2" fill="transparent" strokeLinecap="round" strokeDasharray="22.212 342.212" strokeDashoffset="240"></circle>
                        </svg>
                        <span className="logo-text">S&E</span>
                    </div>
                </Link>
                <div className="hidden md:flex">
                    <ul className="hidden md:flex">
                        <Link href='/wedding/venue'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Venue</li>
                        </Link>
                        <Link href='/wedding/schedule'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Schedule</li>
                        </Link>
                        <Link href='/wedding/rsvp'>
                            <li className="ml-10 uppercase hover:border-b text-xl">RSVP</li>
                        </Link>
                        <Link href='/wedding/registry'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Registry</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="block md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[65%] h-screen bg-[#ecf0f3] p10 ease-in duration-500 z-30"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-30"
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
                        <Link href="/wedding/venue">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Venue
                            </li>
                        </Link>
                        <Link href="/wedding/rsvp">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                RSVP
                            </li>
                        </Link>
                        <Link href="/wedding/registry">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Registry
                            </li>
                        </Link>
                        <Link href="/wedding/schedule">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Schedule
                            </li>
                        </Link>

                        <Link href="/wedding/our-story">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Our Story
                            </li>
                        </Link>

                        <Link href="/wedding/wedding-party">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Wedding Party
                            </li>
                        </Link>

                        <Link href="/wedding/faq">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                FAQ
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar