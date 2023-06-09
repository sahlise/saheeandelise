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
        
        <nav className="fixed w-full h-24 shadow-xl bg-white dark:text-black">
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
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen 
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4">
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar