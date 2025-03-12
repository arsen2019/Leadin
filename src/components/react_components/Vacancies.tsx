import {useEffect, useState, useCallback} from "react";
import {fetchData} from "../../utils/utils.ts";


export default function Vacancies() {
    const [data, setData] = useState({
        data: [{
            heading: '',
            description: '',
            link: ''
        }]
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setData(await fetchData('/api/vacancies'));
        })()

    }, []);

    return (
        <div className="flex  items-center justify-center">
            {
                data.data.length > 0 ? (
                    <div className="inline-grid grid-cols-1 md:grid-cols-2  gap-4 items-center  ">
                        {
                            data.data.map((card, index) => (
                                <div key={index}
                                     className="OpenVac flex flex-col justify-center bg-[#000000] max-w-md min-h-full">
                                    <div className="vacanciesContent flex flex-col items-center p-10 text-center">
                                        <h2 className="text-2xl text-[#FFF]">{card.heading} </h2>
                                        <p className="text-x text-[#FFF] py-2">{card.description}</p>
                                        <a href={card.link} target='_blank' className='w-full'>
                                            <button className=" bg-[#B19482] text-[#FFF] p-2 w-full">LinkedIn</button>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                ) : (
                    <div
                        className="NoVac mx-auto sm:bg-[#FFF] sm:text-[#000000] border-[#785B55] border-2 rounded-md bg-[#000]  sm:w-[80%] px-3 fl">
                        <div className="NoVacanciesContent my-6 flex flex-col  items-center">
                            <h2 className="sm:text-4xl text-xl text-center font-semibold sm:py-6 py-3 ">
                                We currently have no vacancies at this time.
                            </h2>
                            <p className="sm:text-2xl text-lg pb-3 sm:pb-8">
                                In the meantime, follow us on
                            </p>
                            <button
                                className="border-[#785B55] border-2 sm:text-[#000000] bg-[#000] sm:bg-[#FFF] rounded-md px-20 py-1">LinkedIn
                            </button>
                        </div>
                    </div>
                )}
        </div>

    )
}