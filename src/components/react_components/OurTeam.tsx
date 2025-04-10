import {useEffect, useState} from "react";
import {fetchData} from "../../utils/utils.ts";
import {PUBLIC_API_URL_STRAPI} from "../../services/api.ts";


export default function OurTeam() {
    const [data, setData] = useState({
        data: [{
            link: '',
            followers: '',
            role: '',
            name: "",
            lastname: "",
            image: {
                formats: {
                    small: {
                        url: "",
                    },
                    thumbnail: {
                        url: ""
                    }
                }
            },
        }]
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchData('/api/teams?populate=image');
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
        <div className="">

            <div className="team-section grid sm:grid-cols-3 grid-cols-2 gap-5 xl:w-[70%] lg:w-[80%] mx-auto ">
                {
                    data.data.map((member, index) => (
                        <div key={index} className="team-member flex flex-col max-w-72  ">
                            <div className="rounded-md overflow-hidden">
                                <div className="flex-1">
                                    <img src={PUBLIC_API_URL_STRAPI +
                                        (member.image?.formats?.small?.url ? member.image?.formats?.small?.url :
                                            member.image?.formats?.thumbnail?.url)}
                                         className="flex-shrink-0 min-w-full min-h-full h-[200px] object-cover h-stretch sm:w-[240px] sm:h-[300px]"
                                         alt=''/>
                                </div>
                                <div
                                    className="team-content flex flex-col justify-center items-center  w-full p-4 pb-8 bg-[#000000] ">
                                    <h3 className="lg:text-xl md:text-lg text-[14px] pt-1">{member.name} {member.lastname}</h3>
                                    <p className="lg:text-lg md:text-[14px] text-xs ">{member.role}</p>
                                    <p className="lg:text-lg md:text-[14px] text-xs"> {member.followers} followers</p>
                                    <a className="underline underline-offset-2 lg:text-xl  text-md" href={member.link}
                                       target="_blank">Linkedin</a>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}