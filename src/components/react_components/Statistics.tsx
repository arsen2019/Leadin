import React, {useState, useRef, useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import reviewCard from '../../assets/img/reviewCard.png'
import {fetchData} from "../../utils/utils.ts";
import Counter from "./Counter.tsx";

interface IStatistics {
    opportunities: number;
    business_opportunity: number;
    employers: number;
    people: number;
}

export default function Statistics() {
    const [data, setData] = useState<{ data:IStatistics[] }>(
        {
            data: [

            ]
        }
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchData("/api/statistics");
                setData(response);
                console.log(response.data);
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
        <div>
            {data.data.map((stats) => (
                <div className="grid sm:grid-cols-2 grid-cols-1 md:m-20 m-5 md:gap-10">
                    <div className="p-5" ><h3 className="font-semibold text-2xl lg:text-3xl xl:text-4xl py-3"><span><Counter value={stats.employers} />%</span> of employers</h3>
                        <p className="text-base lg:text-lg/6 xl:text-xl/8 sm:pr-5">use social media to screen candidates during the hiring process</p></div>
                    <div className="p-5" ><h3 className="font-semibold text-2xl lg:text-3xl xl:text-4xl py-3"><span><Counter value={stats.opportunities}/>%</span> of opportunities</h3>
                        <p className="text-base lg:text-lg/6 xl:text-xl/8 sm:pr-5">are lost because people don’t have an active personal brand.</p></div>
                    <div className="p-5" ><h3 className="font-semibold text-2xl lg:text-3xl xl:text-4xl py-3"><span><Counter value={stats.people}/>%</span> of people</h3>
                        <p className="text-base lg:text-lg/6 xl:text-xl/8 sm:pr-5">are more likely to trust a company whose leadership is active on social media.</p></div>
                    <div className="p-5" ><h3 className="font-semibold text-2xl lg:text-3xl xl:text-4xl py-3"><span><Counter value={stats.business_opportunity}/>x</span> more business opportunities</h3>
                        <p className="text-base lg:text-lg/6 xl:text-xl/8 sm:pr-5">Entrepreneurs with a strong personal brand attract 4x more business opportunities, as clients prefer working with individuals they know, like, and trust.</p></div>
                </div>
            ))}

        </div>

    );
}
