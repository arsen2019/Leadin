import { useState } from "react";
// import "../../styles/modal.css";
import FeedbackPopUp from "./FeedbackPopUp.tsx";

interface IProps {
    style?: React.CSSProperties;
    buttonText: string;
}

export default function GetStartedPopUp({style,buttonText}: IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const content = "Thanks for your interest in Leadin. We will get back to you as soon as possible."
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsOpen(false);
        setIsFeedbackOpen(true);
    };
    return (
        <div>
            <button className="open-btn"  style={style} onClick={() => setIsOpen(true)}>
                {buttonText}
            </button>


            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="close-btn-div">
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                x
                            </button>
                        </div>
                        <div className="modal-content">
                            <form className="modal-form" onSubmit={handleSubmit}>
                                <div className="initials flex gap-5">
                                    <input type="text" placeholder="Name" className="input-field"/>
                                    <input type="text" placeholder="Surname" className="input-field" />
                                </div>
                                <div className="get_started_contacts flex gap-5">
                                    <input type="text" placeholder="Email" className="input-field" />
                                    <input type="text" placeholder="Phone" className="input-field" />
                                </div>
                                <textarea placeholder="Text" className="input-field" />
                                <div className="send_btn flex justify-end">
                                    <button type="submit" className="submit-btn">Send</button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            )}
            {isFeedbackOpen && <FeedbackPopUp content={content} onClose={() => setIsFeedbackOpen(false)} />}
        </div>
    );
}

