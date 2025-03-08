import {useState} from "react";
import FeedbackPopUp from "./FeedbackPopUp.tsx";

export default function UserReview() {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company:'',
        rate: 0,
        comment: '',
    });

    const handleRating = (index: number) => {
        setRating(index);
        formData['rate'] = index;

    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        if (name === "text" && value.length > 500) return;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
        fetch("http://137.184.20.192:8080/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
    };

    return (
        <div className="text-white p-6 rounded-lg text-center w-8/12 mx-auto min-w-[350px] pb-16">
            <h2 className="text-xl md:text-2xl mb-3">You can share your opinion with others</h2>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}} >
                <div className="flex justify-center gap-2 mb-8">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleRating(num)} key={num}>
                            <path
                                d="M19.1585 4.52318C19.5028 3.82561 20.4975 3.82561 20.8418 4.52318L25.2984 13.5534C25.4351 13.8304 25.6994 14.0224 26.0051 14.0668L35.9705 15.5149C36.7403 15.6267 37.0477 16.5728 36.4907 17.1158L29.2796 24.1448C29.0584 24.3604 28.9575 24.6711 29.0097 24.9755L30.712 34.9007C30.8435 35.6674 30.0388 36.2521 29.3502 35.8901L20.4369 31.2041C20.1634 31.0603 19.8368 31.0603 19.5634 31.2041L10.65 35.8901C9.96148 36.2521 9.15673 35.6674 9.28823 34.9007L10.9905 24.9755C11.0427 24.6711 10.9418 24.3604 10.7206 24.1448L3.50956 17.1158C2.95251 16.5728 3.25989 15.6267 4.02971 15.5149L13.9951 14.0668C14.3008 14.0224 14.5651 13.8304 14.7018 13.5534L19.1585 4.52318Z"
                                fill={`${num <= rating ? '#FFF84E' : '#D9D9D9'}`}/>
                        </svg>
                    ))}
                </div>

                <div className="review-inputs flex flex-col gap-4 text-xs md:text-lg">
                    <div className="credentials flex justify-between">
                        <input type="text" placeholder='Name*' onChange={handleChange} value={formData['firstName']} name='firstName' required={true} className='w-2/5 px-5 py-3 border-white border rounded-lg bg-[#191718]'/>
                        <input type="text" placeholder='Last Name*' onChange={handleChange} value={formData['lastName']} name='lastName' required={true} className='w-2/5 px-5 py-3 border border-white rounded-lg bg-[#191718]'/>
                    </div>
                    <div className='flex justify-start '>
                        <input type="text" placeholder='Company' onChange={handleChange} value={formData['company']} name='company' className='w-full px-5 py-3 border border-white rounded-lg bg-[#191718]' />
                    </div>
                    <textarea
                        required={true}
                        value={formData['comment']}
                        name='comment'
                        onChange={handleChange}
                        className="w-full bg-[#191718]  border border-white py-7 px-5 rounded-md text-white text-xs md:text-lg"
                        placeholder="Tell us about your personal experience working with us."
                    ></textarea>
                </div>


                <div className="review-submit flex md:justify-end justify-center ">
                    <button
                        type='submit'
                        className="mt-3 p-10 md:w-1/3 w-3/4 py-2 bg-[#B19482] hover:bg-white hover:text-black focus:-scale-30 rounded-lg transition"
                    >
                        Send
                    </button>
                </div>
            </form>



            {submitted && (
                <FeedbackPopUp content="Your feedback has been submitted." onClose={() => setSubmitted(false)}/>
            )}
        </div>
    );
}
