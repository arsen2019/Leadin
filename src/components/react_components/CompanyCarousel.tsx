import React from "react";
import Marquee from "react-fast-marquee";

interface CompanyCarouselProps {
    logos: string[];
}

export default function CompanyCarousel({ logos }: CompanyCarouselProps) {
    return (
            <div className="w-full max-w-[1440px] overflow-hidden flex gap-10">

                <Marquee gradient={false} speed={60} >
                    {logos.map((logo:any, index:number) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={logo}
                                alt={`Client ${index + 1}`}
                                className="md:max-w-[250px] max-w-[150px] mx-2 md:mx-5 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
        </div>
    );
}
