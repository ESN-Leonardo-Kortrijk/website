"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    //Handles the opening and closing of our nav
    const handleClick = () => {
        console.log("clicked");
        setIsOpen(!isOpen);
    };
    
    return (
        <nav className="bg-gray-200 fixed w-screen">
            <div className="flex justify-between h-20 items-center w-4/5 m-auto">
                <Link href={"/"}>
                    <Image src="/images/ESN_Leo_logo.png" alt="logo" width={150} height={100} />
                </Link>
                <button onClick={handleClick} className="flex flex-col justify-center items-center lg:hidden">
                    <span className={`bg-stone-950 block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                                    }`} >
                    </span>
                    <span className={`bg-stone-950 block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                                    'opacity-0' : 'opacity-100'
                                    }`} >
                    </span>
                    <span className={`bg-stone-950 block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                    }`} >
                    </span>    
                </button>
                <div className={`flex flex-col gap-4 items-center h-full lg:hidden z-[1000] ${isOpen ? 
                                'absolute top-20 left-0 w-screen bg-gray-200 z-[1000]' : 'hidden'
                                }`}>
                    <NavLink
                        href="/"
                        title="Home"
                        color="esn-cyan"
                    />
                    <NavLink
                        href="/about-us"
                        title="About Us"
                        color="esn-magenta"
                    />
                    <NavLink
                        href="/contact-us"
                        title="Contact Us"
                        color="esn-orange"
                    />
                    <NavLink
                        href="/partners"
                        title="Partners"
                        color="text-blue-500"
                    />  
                </div>
                <div className="hidden gap-4 items-center h-full  lg:flex">
                    <NavLink
                        href="/"
                        title="Home"
                        color="esn-cyan"
                    />
                    <NavLink
                        href="/about-us"
                        title="About Us"
                        color="esn-magenta"
                    />
                    <NavLink
                        href="/contact-us"
                        title="Contact Us"
                        color="esn-orange"
                    />
                    <NavLink
                        href="/partners"
                        title="Partners"
                        color="text-blue-500"
                    />
                </div>
            </div>
        </nav>
    );
    }