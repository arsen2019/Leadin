import {useState} from "react";
import FeedbackPopUp from "./FeedbackPopUp.tsx";
import {postData} from '../../utils/utils.ts';


export default function GetInTouchLarge() {
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
        console.log(formData);
        setIsFeedbackOpen(true);
        setTimeout(() => setIsFeedbackOpen(false), 2000);
        postData('/subscriptions', formData)
    }

    return (
        <div>
            <form className="flex flex-1 w-full flex-col gap-4 text-[#D7D3CE]" onSubmit={handleSubmit}>
                <div><input type="text" placeholder="First name" onChange={handleChange}  name='firstName' required={true}
                            className="w-full p-2 border border-[#D7D3CE] rounded-md focus:ring-2  bg-[#000000]"/></div>
                <div><input type="text" placeholder="Last name" onChange={handleChange} name='lastName' required={true}
                            className="w-full p-2 border border-[#D7D3CE] rounded-md focus:ring-2  bg-[#000000]"/></div>
                <div><input type="text" placeholder="Phone number" onChange={handleChange} name='phone' required={true}
                            className="w-full p-2 border border-[#D7D3CE] rounded-md focus:ring-2  bg-[#000000]"/></div>
                <div>
                    <input type="email" placeholder="Email" onChange={handleChange} name='email' required={true}
                           className="w-full p-2 border border-[#D7D3CE] rounded-md focus:ring-2  bg-[#000000]"/>
                </div>
                <div className="flex  h-full ">
                    <textarea placeholder="Text" onChange={handleChange} name='text'
                              className=" start-0 w-full border p-2 border-[#D7D3CE] rounded-md focus:ring-2 bg-[#000000]"></textarea>
                </div>
                <div>
                    <button type={"submit"} className="bg-[#B19482] py-2 rounded-md w-full hover:bg-[#8D705D] text-white focus:-scale-30">
                        Send
                    </button>
                </div>
            </form>


            {isFeedbackOpen && <FeedbackPopUp content={content} onClose={() => setIsFeedbackOpen(false)}/>}
        </div>
    );


}

