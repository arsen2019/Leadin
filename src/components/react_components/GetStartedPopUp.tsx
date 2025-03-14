import {useState} from "react";
import FeedbackPopUp from "./FeedbackPopUp.tsx";
import {postData} from '../../utils/utils.ts';

interface IProps {
    style?: React.CSSProperties;
    buttonText: string;
}

export default function GetStartedPopUp({style, buttonText}: IProps) {
    const formStruct = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        text: '',
    }
    const [isOpen, setIsOpen] = useState(false);
    const content = "Thanks for your interest in Leadin. We will get back to you as soon as possible."
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [formData, setFormData] = useState(formStruct);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        if (name === "text" && value.length > 500) return;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsOpen(false);
        setIsFeedbackOpen(true);
        postData('/subscriptions', formData);
    }

        return (
            <div>
                <button className="open-btn hover:bg-[#8D705D]" style={style} onClick={() => setIsOpen(true)}>
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
                                        <input type="text" onChange={handleChange} required={true}
                                               value={formData['firstName']} name='firstName' placeholder="Name"
                                               className="input-field"/>
                                        <input type="text" onChange={handleChange} required={true}
                                               value={formData['lastName']} name='lastName' placeholder="Surname"
                                               className="input-field"/>
                                    </div>
                                    <div className="get_started_contacts flex gap-5">
                                        <input type="text" onChange={handleChange} required={true}
                                               value={formData['email']} name='email' placeholder="Email"
                                               className="input-field"/>
                                        <input type="text" onChange={handleChange} required={true}
                                               value={formData['phone']} name='phone' placeholder="Phone"
                                               className="input-field"/>
                                    </div>
                                    <textarea placeholder="Text" onChange={handleChange} value={formData['text']}
                                              name='text' className="input-field"/>
                                    <div className="send_btn flex justify-end">
                                        <button type="submit" className="submit-btn">Send</button>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                )}
                {isFeedbackOpen && <FeedbackPopUp content={content} onClose={() => setIsFeedbackOpen(false)}/>}
            </div>
        );

}

