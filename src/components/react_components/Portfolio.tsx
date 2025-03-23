import React, {useState, useRef, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OptimizedImage from "./utils/utils.tsx";
import {filter} from "minimatch";

interface PortfolioProps {
    slides: string[];
}

export default function Portfolio({ slides }: PortfolioProps) {
    const carouselRef = useRef<any>(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0.5);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 0.5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
            partialVisibilityGutter: 0.5,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3,
            partialVisibilityGutter: 0.5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            partialVisibilityGutter: 0.5,
        },
    };

    const goToNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const goToPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };

    useEffect(() => {
        if (carouselRef.current) {
            setTimeout(() => {
                carouselRef.current.goToSlide(0.5, true);
            }, 100);
        }
    }, []);

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(4);
            } else {
                setItemsToShow(3);
            }
        };

        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    return (
        <div className="w-full relative">
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={false}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all 0.5s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                beforeChange={(nextSlide) => setCurrentIndex(nextSlide)}
                centerMode={false}
                arrows={false}
                partialVisible={true}
                renderButtonGroupOutside={true}
            >
                {slides.map((image, index) => {
                    const isOdd = index % 2 === 1;
                    const isMiddleOne = index % 4 === 2
                    return (
                        <div
                            key={index}
                            className="px-2"
                        >
                            {/*<img*/}
                            {/*    src={image}*/}
                            {/*    alt={`Slide ${index + 1}`}*/}
                            {/*    className="w-full h-full object-cover"*/}
                            {/*/>*/}
                            <OptimizedImage src={image} alt={`Slide ${index + 1}`} style={{width:'100%', height:'100%', objectFit: 'cover'}}  />
                        </div>
                    );
                })}

            </Carousel>
            <div className="flex justify-between absolute left-0 right-0 px-4">
                <button
                    onClick={goToPrev}
                    aria-label="Previous"
                    className=""
                    disabled={currentIndex === 0}
                >
                    <img src="/icons/previous.svg" alt="previous" style={{filter :currentIndex === 0 ? '' : 'brightness(2)'}} />
                </button>
                <button
                    onClick={goToNext}
                    aria-label="Next"
                    className=""
                    disabled={currentIndex >= slides.length - itemsToShow}
                >
                    <img src="/icons/next.svg" style={{filter :currentIndex >= slides.length - itemsToShow ? 'invert(0.5)' : ''}} alt="next" />
                </button>
            </div>
        </div>
    );
}