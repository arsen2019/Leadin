import React, {useState, useRef, useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import {fetchData} from "../../utils/utils.ts";

interface Info {
    budgets: number;
    clients: number;
    campaigns: number;
    reach: number;
}

export default function Blog() {
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
                const response = await fetchData("/blog");
                setData(response);
                console.log(response.data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);


    return (
        <div>Blog</div>

    );
}
