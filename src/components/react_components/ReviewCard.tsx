import React, {useState, useRef, useEffect} from "react";
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

interface ReviewSliderProps {
    reviews: Review[];
}

export default function ReviewCard() {
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
    

    return (
        <>
        {data?.data.map((review:Review) => (
            <div key={review.id} className="flex justify-center">
                <div
                    className="review-container relative inline-block min-w-[350px]">
                    <div className="flex justify-center items-center">
                        <img src={reviewCard.src} alt=''/>
                    </div>

                    <div
                        className='review-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 flex flex-col gap-[1vh] md:text-md'>
                        {
                            review.company ?  (<h3 className="text-center text-xl lg:text-2xl">{review.company}</h3>):
                                (<h3 className="text-center text-xl lg:text-2xl">{review.firstname} {review.lastname}</h3>)
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
        ))
        }
        </>
    );
}
