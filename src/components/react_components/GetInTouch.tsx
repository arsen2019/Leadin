import { useState } from "react";
import "../../styles/modal.css";
import FeedbackPopUp from "./FeedbackPopUp.tsx";
import {postData} from "../../utils/utils.ts";


interface IProps {
    style?: React.CSSProperties;
}



export default function GetInTouch({style}:IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [subscriptionForm, setSubscriptionForm]= useState({
        email: "",
        text:""
    })
    const content = "Thank you. Your form is submitted. You will be contacted by our team shortly."
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(subscriptionForm)
        setIsOpen(false);
        setIsFeedbackOpen(true);
        postData('/contact', subscriptionForm)
        setTimeout(() => setIsFeedbackOpen(false), 2000);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setSubscriptionForm({...subscriptionForm, [name]: value});
    };

    return (
        <div>
            <form className="flex flex-col h-full justify-between gap-4" onSubmit={handleSubmit} >
                <div className="inputs flex h-full gap-4 flex-col">
                    <input name="email" type="email" placeholder="Email" required onChange={handleChange}
                           className="w-full p-2 border border-[#D9B99B] rounded-md focus:ring-2 bg-[#191718]"/>
                    <textarea name="text" placeholder="Text" required onChange={handleChange}
                              className="start-0 w-full h-full border grow flex p-2 border-[#D9B99B] rounded-md focus:ring-2 bg-[#191718]"></textarea>
                </div>
                <div className="flex">
                    <button className="bg-[#B19482] py-2 rounded-md w-full hover:bg-[#8D705D] text-white" type="submit">
                        Send
                    </button>
                </div>
            </form>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="close-btn-div">
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                X
                            </button>
                        </div>
                        <div className="modal-content">
                                <p>{content}</p>

                        </div>
                    </div>

                </div>
            )}
            {isFeedbackOpen && <FeedbackPopUp content={content} onClose={() => setIsFeedbackOpen(false)} />}
        </div>
    );
}
