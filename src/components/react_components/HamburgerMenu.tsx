import React, { useState, useEffect, useRef } from "react";

interface Props {
    activePath: string;
}

export default function HamburgerMenu({activePath}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);


    return (
        <div className="relative w-full flex justify-end py-4 lg:hidden ">
            <img
                src="/icons/hamburger.svg"
                alt="hamburger"
                className="cursor-pointer w-8 h-8 z-50"
                style={{ visibility: !isOpen ? "visible"  :"hidden" }}
                onClick={toggleMenu}
            />

            <div
                className={`fixed inset-0 bg-black transition-opacity duration-500 ${
                    isOpen ? "opacity-70 visible" : "opacity-0 hidden"
                }`}
                style={{ backdropFilter: 'blur(2px)' }}
                onClick={toggleMenu}
            ></div>

            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-screen w-max bg-black px-[10%] text-white text-xl
                flex flex-col justify-center transform transition-transform duration-500 ease-in-out
                ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
            >
                <ul className="space-y-4">
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/" ? "font-bold" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/">Home</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/about/" ? "font-bold" : "opacity-80"
                    }  hover:scale-130 active:scale-120 `}><a href="/about">About Us</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/services/" ? "font-bold" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/services">Services</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/clients/" ? "font-bold" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/clients">Clients</a></li>
                    {/*<li className={`cursor-pointer transform transition-all duration-300 ${*/}
                    {/*    activePath === "/portfolio/" ? "font-bold" : "opacity-80"*/}
                    {/*}  hover:scale-130 active:scale-120 `}><a href="/portfolio">Portfolio</a></li>*/}
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/connect/" ? "font-bold" : "opacity-80"
                    }  hover:scale-130 active:scale-120 `}><a href="/connect">Connect</a></li>
                    <li className={`cursor-pointer transform transition-all duration-300 ${
                        activePath === "/blog/" ? "font-bold" : "opacity-80"
                    } hover:scale-130 active:scale-120 `}><a href="/blog">Blog</a></li>
                </ul>

                <button
                    onClick={toggleMenu}
                    className="absolute top-6 right-6 text-3xl text-white hover:text-red-400  transition-colors"
                >
                    ✖
                </button>
            </div>
        </div>
    );
}