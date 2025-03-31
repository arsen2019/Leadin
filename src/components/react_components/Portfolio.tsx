import React, {useState, useRef, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ResponsiveImage from "./ResponsiveImage.tsx";
import {fetchData} from "../../utils/utils.ts";
import {PUBLIC_API_URL_STRAPI} from "../../services/api.ts";

interface PortfolioProps {
    slides: string[];
}

export default function Portfolio({slides}: PortfolioProps) {
    const [currentIndex, setCurrentIndex] = useState<any>({
        0: 0,
        1: 0,
    });
    const carouselRef1 = useRef<any>(null);
    const carouselRef2 = useRef<any>(null);
    const [itemsToShow, setItemsToShow] = useState(4);
    const [data, setData] = useState<{ data: any[] }>({data: []});
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchData("/api/portfolios?populate=image");
                setData(response);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        const updateItemsToShow = () => {
            setItemsToShow(window.innerWidth >= 1024 ? 4 : 3);
        };

        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         carouselRef1.current?.next();
    //         carouselRef2.current?.next();
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, []);

    if (isLoading) return <p>Loading...</p>;

    const midIndex = Math.ceil(data.data.length / 2);
    const firstRow = data.data.slice(0, midIndex);
    const secondRow = data.data.slice(midIndex);

    const responsive = {
        superLargeDesktop: {breakpoint: {max: 4000, min: 1024}, items: 4},
        desktop: {breakpoint: {max: 1024, min: 768}, items: 4},
        tablet: {breakpoint: {max: 768, min: 464}, items: 3},
        mobile: {breakpoint: {max: 464, min: 0}, items: 3},
    };

    const goToNext = (ref: any, rowIndex: number) => {
        setCurrentIndex((prev: any) => ({
            ...prev,
            [rowIndex]: (prev[rowIndex] || 0) + 1,
        }));
        ref.current?.next();
    };

    const goToPrev = (ref: any, rowIndex: number) => {
        setCurrentIndex((prev: any) => ({
            ...prev,
            [rowIndex]: Math.max((prev[rowIndex] || 0) - 1, 0), // Prevent negative index
        }));
        ref.current?.previous();
    };

    return (
        <div className="w-full space-y-4 relative">
            {[{data: firstRow, ref: carouselRef1}, {data: secondRow, ref: carouselRef2}].map((row, rowIndex) => (
                <div key={rowIndex} className="relative">
                    <Carousel
                        ref={row.ref}
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl
                        customTransition="all 0.5s ease"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        centerMode={false}
                        arrows={false}
                        partialVisible
                    >
                        {row.data.map((item, index) => {
                            console.log(item)
                            const imageUrl =
                                PUBLIC_API_URL_STRAPI +
                                (item.image?.formats?.small?.url ?  item.image?.formats?.small?.url:
                                    item.image?.formats?.thumbnail?.url);

                            return (
                                <div key={index} className="px-2 w-full h-full">
                                    {/*<OptimizedImage*/}
                                    {/*    src={imageUrl}*/}
                                    {/*    alt={`Slide ${index + 1}`}*/}
                                    {/*    style={{width: "100%", height: "100%", objectFit: "cover"}}*/}
                                    {/*/>*/}
                                    <ResponsiveImage src={imageUrl} alt={`Slide ${index + 1}`} className='w-full h-full object-cover' loading='lazy' fetchPriority='auto' />
                                </div>
                            );
                        })}
                    </Carousel>

                    {/* Navigation Buttons */}
                    {/*<div*/}
                    {/*    className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">*/}
                    {/*    <button onClick={() => goToPrev(row.ref)} aria-label="Previous">*/}
                    {/*        <img src="/icons/previous.svg" alt="previous"/>*/}
                    {/*    </button>*/}
                    {/*    <button onClick={() => goToNext(row.ref)} aria-label="Next">*/}
                    {/*        <img src="/icons/next.svg" alt="next"/>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className="flex justify-between  mb-10 px-4">
                        <button
                            onClick={() => goToPrev(row.ref, rowIndex)}
                            aria-label="Previous"
                            disabled={currentIndex[rowIndex] === 0}
                            style={{filter: currentIndex[rowIndex] === 0 ? "" : "brightness(2)"}}
                        >
                            <img
                                src="/icons/previous.svg"
                                alt="previous"
                                style={{filter: currentIndex[rowIndex] === 0 ? "invert(0.5)" : ""}}
                            />
                        </button>

                        <button
                            onClick={() => goToNext(row.ref, rowIndex)}
                            aria-label="Next"
                            disabled={currentIndex[rowIndex] >= row.data.length - itemsToShow} // ✅ Correctly disables at last index
                        >
                            <img
                                src="/icons/next.svg"
                                alt="next"
                                style={{
                                    filter: currentIndex[rowIndex] >= row.data.length - itemsToShow ? "invert(0.5)" : "",
                                }}
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

