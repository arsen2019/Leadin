import { useState } from "react";
import "../../styles/modal.css";
import FeedbackPopUp from "./FeedbackPopUp.tsx";


interface IProps {
    style?: React.CSSProperties;
}

export default function SubscribePopUp({style}:IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const content = "Thanks for subscribing to our newsletter. We will get back to you as soon as possible."
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsOpen(false);
        setIsFeedbackOpen(true);
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
                                <input type="email" placeholder="Email" className="input-field" />
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
