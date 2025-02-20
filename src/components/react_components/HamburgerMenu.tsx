import React, { useState } from "react";

interface Props {
    activePath: string;
}

export default function HamburgerMenu({activePath}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-full flex justify-end py-4 lg:hidden z-10">
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
                className={`fixed top-0 right-0 h-screen w-2/5 bg-black  p-2 text-white text-xl shadow-lg 
                flex flex-col  justify-center transform transition-transform duration-500 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className="space-y-4">
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/" ? "scale-130" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/">Home</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/about" ? "scale-130" : "opacity-80"
                    }  hover:scale-130 active:scale-120 `}><a href="/about">About Us</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/services" ? "scale-130" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/services">Services</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/clients" ? "scale-130" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/clients">Clients</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/portfolio" ? "scale-130 text-center" : "opacity-80"
                    }  hover:scale-130 active:scale-120 `}><a href="/portfolio">Portfolio</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/connect" ? "scale-130" : "opacity-80"
                    }  hover:scale-130 active:scale-120 `}><a href="/connect">Connect</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/blog" ? "scale-130" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/blog">Blog</a></li>
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
