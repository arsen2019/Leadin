import React from "react";
import Marquee from "react-fast-marquee";

interface ClientsCarouselProps {
    logos: any;
}

export default function ClientCarousel({ logos }: ClientsCarouselProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-7xl overflow-hidden">

                <Marquee gradient={false} speed={60} >
                    {logos.map((logo:any, index:number) => (
                        <div key={index} className="flex justify-center w-1/2  p-2">
                            <img
                                src={logo}
                                alt={`Client ${index + 1}`}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
