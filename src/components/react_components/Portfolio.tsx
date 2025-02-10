import React, { useRef, useState } from "react";

interface PortfolioProps {
    slides: string[];
}

export default function Portfolio({ slides }: PortfolioProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate card width based on container width
    const getCardWidth = () => {
        if (!containerRef.current) return 300;
        const containerWidth = containerRef.current.offsetWidth;
        return Math.min(400, containerWidth * 0.8);
    };

    const scrollToIndex = (index: number) => {
        if (!containerRef.current) return;

        const newIndex = (index + slides.length) % slides.length;
        const cardWidth = getCardWidth();
        const gap = 8;
        const scrollPosition = (cardWidth + gap) * newIndex;

        containerRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className="h-full overflow-x-auto  snap-x snap-mandatory"
                style={{
                scrollbarWidth:"none" }}
            >
                <div className="flex gap-8 h-full items-center ">
                    {slides.map((image, index) => {
                        const isFirst = index === 0;
                        const isLast = index === slides.length - 1;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`
                                    flex-shrink-0  snap-start w-1/4
                                    ${isFirst ? '-ml-[20%]' : ''}
                                    ${isLast ? '-mr-[20%]' : ''}
                                    transition-all duration-3000
                
                                `}
                                style={{

                                    paddingTop:`${isEven ? '-4rem' : '4rem'}`,

                                }}
                            >
                                <div className="">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={() => scrollToIndex(currentIndex - 1)}
                    className=""
                    aria-label="Previous"
                >
                    <img src="/icons/previous.svg" alt="previous"/>
                </button>

                <button
                    onClick={() => scrollToIndex(currentIndex + 1)}
                    className=""
                    aria-label="Next"
                >
                    <img src="/icons/next.svg" alt="next"/>

                </button>
            </div>
        </div>
    );
}