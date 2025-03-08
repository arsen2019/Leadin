import { useState } from "react";
import "../../styles/modal.css";
import FeedbackPopUp from "./FeedbackPopUp.tsx";


interface IProps {
    style?: React.CSSProperties;
}



export default function SubscribePopUp({style}:IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [subscriptionForm, setSubscriptionForm]= useState({
        email: "",
    })
    const content = "Thanks for subscribing to our newsletter. We will get back to you as soon as possible."
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsOpen(false);
        setIsFeedbackOpen(true);
        fetch("http://137.184.20.192:8080/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(subscriptionForm),
        })
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setSubscriptionForm({...subscriptionForm, [name]: value});
    };

    return (
        <div>
            <button className="open-btn  hover:bg-[#8D705D]" style={style} onClick={() => setIsOpen(true)}>
                Subscribe to our newsletter
            </button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="close-btn-div">
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                X
                            </button>
                        </div>
                        <div className="modal-content">

                            <div className="modal-header">
                                <h2>Subscribe to our daily newsletter:</h2>
                            </div>


                            <form className="modal-form" onSubmit={handleSubmit}>
                                <input type="email" placeholder="Email" className="input-field" value={subscriptionForm['email']} name='email' onChange={handleChange} />
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>

                        </div>
                    </div>

                </div>
            )}
            {isFeedbackOpen && <FeedbackPopUp content={content} onClose={() => setIsFeedbackOpen(false)} />}
        </div>
    );
}
