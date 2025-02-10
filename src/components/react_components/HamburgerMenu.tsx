import React, { useState } from "react";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-full flex justify-end py-4 lg:hidden">
            <img
                src="/icons/hamburger.svg"
                alt="hamburger"
                className="cursor-pointer w-8 h-8 z-50"
                style={{ visibility: !isOpen ? "visible"  :"hidden" }}
                onClick={toggleMenu}

            />

            <div
                className={`fixed bg-black bg-opacity-50 transition-opacity ${
                    isOpen ? "opacity-50 visible" : "opacity-0 invisible"
                }`}
                onClick={toggleMenu}
            ></div>
            <div
                className={`fixed top-0 right-0 h-screen w-1/4 bg-black opacity-80 text-white text-xl shadow-lg 
                flex flex-col  justify-center transform transition-transform duration-500 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className="space-y-4 text-center">
                    <li className="cursor-pointer transform transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 active:scale-150 "><a href="/">Home</a></li>
                    <li className="cursor-pointer transform transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 active:scale-150 "><a href="/about">About Us</a></li>
                    <li className="cursor-pointer transform transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 active:scale-150 "><a href="/services">Services</a></li>
                    <li className="cursor-pointer transform transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 active:scale-150 "><a href="/clients">Clients</a></li>
                    <li className="cursor-pointer transform transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 active:scale-150 "><a href="/portfolio">Portfolio</a></li>
                    <li className="cursor-pointer transform transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 active:scale-150 "><a href="/connect">Connect</a></li>
                    <li className="cursor-pointer transform transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 active:scale-150"><a href="/blog">Blog</a></li>
                </ul>

                <button
                    onClick={toggleMenu}
                    className="absolute top-6 right-6 text-3xl text-white"
                >
                    ✖
                </button>
            </div>
        </div>
    );
}
