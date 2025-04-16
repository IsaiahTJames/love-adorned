"use client"
import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setContactOpen(false);
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black border-b ">
            <img src="/LoveAdornedLogo.png" alt="Love Adorned Logo" className="h-24"/>
            <ul className="hidden md:flex flex-1 justify-end cursor-pointer">
            <li className="p-4 hover-underline">Home</li>
                <li className="p-4 hover-underline">Consultations</li>
                <li className="p-4 hover-underline">About</li>
                <li className="p-4 relative hover-underline"
                    onClick={() => setContactOpen(!contactOpen)}>
                    Contact
                    {contactOpen && (
                        <div className="absolute left-0 top-12 bg-white shadow-md border border-gray-300 rounded-lg w-40">
                            <a href="https://www.instagram.com/loveadornedbyloritazbah/" target="_blank"
                               className="block px-4 py-2 text-black hover:text-blue-700 hover:bg-gray-200 transition-colors duration-200">
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/LoveAdornedByLT/photos" target="_blank"
                               className="block px-4 py-2 text-black hover:text-blue-700 hover:bg-gray-200 transition-colors duration-200">
                                Facebook
                            </a>
                        </div>
                    )}
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <div onClick={handleNav} className="block md:hidden ml-4 hover:text-blue-700 transition-colors duration-200">
                    {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                </div>
            </div>
            <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-gray-300 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <img src="/LoveAdornedLogo.png" alt="Love Adorned Logo" className="h-24 w-auto px-4"/>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Consultations</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 relative hover-underline"
                        onClick={() => setContactOpen(!contactOpen)}>
                        Contact
                        {contactOpen && (
                            <div className="absolute left-0 top-12 bg-white shadow-md border border-gray-300 rounded-lg w-40">
                                <a href="https://www.instagram.com/loveadornedbyloritazbah/" target="_blank"
                                   className="block px-4 py-2 text-black hover:text-blue-700 hover:bg-gray-200 transition-colors duration-200">
                                    Instagram
                                </a>
                                <a href="https://www.facebook.com/LoveAdornedByLT/photos" target="_blank"
                                   className="block px-4 py-2 text-black hover:text-blue-700 hover:bg-gray-200 transition-colors duration-200">
                                    Facebook
                                </a>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;