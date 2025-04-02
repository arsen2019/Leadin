import { useState } from "react";
import "../../styles/modal.css";
import FeedbackPopUp from "./FeedbackPopUp.tsx";
import {postData} from "../../utils/utils.ts";

export default function OpenPositions() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [subscriptionForm, setSubscriptionForm]= useState({
        email: "",
    })
    const content = "Thank you. Your form is submitted. You will be contacted by our team shortly."
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(subscriptionForm)
        setIsOpen(false);
        setIsFeedbackOpen(true);
        postData('/join', subscriptionForm)
        setTimeout(() => setIsFeedbackOpen(false), 2000);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setSubscriptionForm({...subscriptionForm, [name]: value});
    };

    return (
        <div>
            <form className="flex gap-6 py-14 sm:flex-row flex-col" onSubmit={handleSubmit}>
                <div className="basis-2/3 w-full"><input type="email" placeholder="Email" onChange={handleChange} required={true}
                                                     className=" w-full  p-2 border border-[#D7D3CE] rounded-md focus:ring-2  bg-[#000000] sm:bg-[#FFF] sm:text-[#000000]"/>
                </div>
                <div className="basis-1/3 w-full">
                    <button type={'submit'} className="bg-[#B19482] py-2 rounded-md w-full hover:bg-[#8D705D] text-white focus:-scale-30">
                        Send
                    </button>
                </div>
            </form>

            {isFeedbackOpen && <FeedbackPopUp content={content} onClose={() => setIsFeedbackOpen(false)} />}
        </div>
    );
}
