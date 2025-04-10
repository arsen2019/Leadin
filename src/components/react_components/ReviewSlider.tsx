import React, {useState, useRef, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviewCard from '../../assets/img/reviewCard.png'
import {fetchData} from "../../utils/utils.ts";

interface Review {
    id: number;
    firstname: string;
    lastname: string;
    rate: number;
    company:string
    comment: string;
}


export default function ReviewSlider() {
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(0);
    const [data, setData] = useState<{ data: Review[] }>(
        {
            data: []
        }
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchData("/api/reviews");
                console.log(response);
                setData(response);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-[#000]"></div>
            </div>
        );
    }


    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
            } else if (window.innerWidth < 1024 && window.innerWidth >= 464) {
                setItemsToShow(2);
            } else {
                setItemsToShow(1);
            }
        };

        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    const responsive = {
        superLargeDesktop: {breakpoint: {max: 4000, min: 1024}, items: 3},
        desktop: {breakpoint: {max: 1024, min: 768}, items: 2},
        tablet: {breakpoint: {max: 768, min: 464}, items: 2},
        mobile: {breakpoint: {max: 464, min: 0}, items: 1},
    };

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
                {data?.data.map((review) => (
                    <div key={review.id} className="flex justify-center">
                        <div
                            className="review-container relative inline-block min-w-[350px]">
                            <div className="flex justify-center items-center">
                                <img src={reviewCard.src} alt=''/>
                            </div>

                            <div
                                className='review-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 flex flex-col gap-[1vh] md:text-md'>
                                {
                                    review.company ?  (
                                            <>
                                                <h2 className="text-center text-xl lg:text-2xl font-semibold">{review.company}</h2>
                                                <h3 className='text-center text-lg lg:text-xl'>{review.firstname} {review.lastname}</h3>
                                            </>
                                        ):
                                        (<h2 className="text-center text-xl lg:text-2xl font-semibold">{review.firstname} {review.lastname}</h2>)
                                }
                                <div className="flex justify-center my-2">
                                    {Array.from({length: review.rate}).map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 17 17" fill="#FFF84E">
                                            <path
                                                d="M8.36263 0.821777L10.251 6.63362L16.3619 6.63362L11.4181 10.2255L13.3065 16.0374L8.36263 12.4455L3.41879 16.0374L5.30717 10.2255L0.363323 6.63362L6.47425 6.63362L8.36263 0.821777Z"/>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-center px-4">{review.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="flex justify-between absolute left-0 right-0 px-4">
                <button onClick={goToPrev} disabled={currentIndex === 0}>
                    <img src="/icons/previous.svg" alt="Previous"
                         style={{filter: currentIndex === 0 ? '' : 'brightness(2)'}}/>
                </button>
                <button onClick={goToNext} disabled={currentIndex >= data?.data.length - itemsToShow}>
                    <img src="/icons/next.svg" alt="Next"
                         style={{filter: currentIndex >= data?.data.length - itemsToShow ? 'invert(0.5)' : ''}}/>
                </button>
            </div>
        </div>
    );
}
