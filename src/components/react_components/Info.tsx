import React, {useState, useRef, useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import reviewCard from '../../assets/img/reviewCard.png'
import {fetchData} from "../../utils/utils.ts";
import Counter from "./Counter.tsx";

interface Info {
    budgets: number;
    clients: number;
    campaigns: number;
    reach: number;
}

export default function Info() {
    const [data, setData] = useState<{ data:Info[] }>(
        {
            data: [

            ]
        }
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchData("/api/infos");
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
        <div className="flex bg-white w-full md:w-[80%] mx-auto rounded-[30px] md:px-20 md:py-10 px-6 py-5">
                {data.data.map((stats,index) => (
                    <ul key={index} className="flex justify-between text-black w-full font-bold text-[16px] md:text-[24px] lg:text-[32px] gap-5">
                        <li>Clients <br/><Counter value={stats.clients}/></li>
                        <li>Reach <br/><Counter value={stats.reach} /></li>
                        <li>Campaigns <br/><Counter value={stats.campaigns} /></li>
                        <li>Budgets <br/><Counter value={stats.budgets}/></li>
                    </ul>
))}

        </div>

    );
}
