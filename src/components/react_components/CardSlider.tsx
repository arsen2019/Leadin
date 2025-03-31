import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchData } from "../../utils/utils.ts";
import { PUBLIC_API_URL_STRAPI } from "../../services/api.ts";

export default function CardSlider() {
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState<{ data: any[] }>({ data: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchData("/api/cards?populate=image");
                setData(response);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    if (isLoading) return <p>Loading...</p>;

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const itemsPerSlide = 4;
    const groupedSlides = [];
    for (let i = 0; i < data.data.length; i += itemsPerSlide) {
        groupedSlides.push(data.data.slice(i, i + itemsPerSlide));
    }

    const goToNext = () => carouselRef.current?.next();
    const goToPrev = () => carouselRef.current?.previous();

    return (
        <div className="w-full relative">
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={false}
                autoPlay={false}
                customTransition="all 0.5s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                beforeChange={(nextSlide) => setCurrentIndex(nextSlide)}
                arrows={false}
            >
                {groupedSlides.map((group, index) => (
                    <div key={index} className="grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-5 h-fit">
                        {group.map((card: any) => {
                            const imageUrl =
                                PUBLIC_API_URL_STRAPI +
                                (card.image?.formats?.small?.url ||
                                    card.image?.formats?.thumbnail?.url);
                                    // || "/fallback-image.jpg");

                            return (
                                <div key={card.id} className="cards-container flex flex-row rounded-xl overflow-hidden min-w-[350px]">
                                    <div className="basis-2/5 relative text-[#FFF]">
                                        <img
                                            className="flex-shrink-0 min-w-full min-h-full"
                                            src={imageUrl}
                                            alt={card.title || "Image"}
                                        />
                                        <div className="absolute bottom-4 left-4">
                                            <h3 className="card-name font-semibold text-xs sm:text-xl">{card.title}</h3>
                                            <p className="text-[10px] sm:text-[16px]">{card.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="card-content basis-3/5 flex justify-center items-center bg-[#FFF] text-[#000000] sm:p-6 p-2 w-full">
                                        <div>
                                            <h3 className="font-bold pb-2 xl:text-xl lg:text-lg sm:text-base text-[13px]">{card.header}</h3>
                                            <p className="xl:text-lg lg:text-base sm:text-[13px] text-[11px]">{card.text}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </Carousel>

            <div className="flex justify-between absolute left-0 right-0 px-4 mt-5 lg:mt-10">
                <button onClick={goToPrev} disabled={currentIndex === 0}>
                    <img src="/icons/previous.svg" alt="Previous" style={{ filter: currentIndex === 0 ? "" : "brightness(2)" }} />
                </button>
                <button onClick={goToNext} disabled={currentIndex >= groupedSlides.length - 1}>
                    <img src="/icons/next.svg" alt="Next" style={{ filter: currentIndex >= groupedSlides.length - 1 ? "invert(0.5)" : "" }} />
                </button>
            </div>
        </div>
    );
}
