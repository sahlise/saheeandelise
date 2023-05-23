import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        
        <nav className="fixed w-full h-24 shadow-xl bg-white dark:text-black">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href='/wedding'>
                    <div>Logo Placeholder</div>
                </Link>
                
                <div>
                    <ul className="hidden sm:flex">
                        <Link href='/wedding/wedding-party'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Wedding Party</li>
                        </Link>
                        <Link href='/wedding/venue'>
                            <li className="ml-10 uppercase hover:border-b text-xl">Venue</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar