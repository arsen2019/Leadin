import {useState} from "react";
import FeedbackPopUp from "./FeedbackPopUp.tsx";
import {postData} from "../../utils/utils.ts";

interface StepByStepProps {
    style?: React.CSSProperties;
    btnText: string;
}
export default function StepByStepPopUp({style, btnText}: StepByStepProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        description: ""
    });
    const content = 'Thank you. Your form is submitted. You will be contacted by our team shortly.'

    const queries = [
        'Submit this short form to get in touch with our team.',
        'First name*', 'Last name*',
        'Write your phone number',
        'Write your email',
        'Please provide details.',
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        if (name === "description" && value.length > 500) return;
        setFormData({...formData, [name]: value});
    };

    const handleNext = () => {
        if (step < queries.length - 1) {
            setStep(step + 1);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
        if (event.key === "Enter") {
            if (!isFormValid()) {
                handleNext()
                event.preventDefault();
            }
        }
    };

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== "");
    };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!isFormValid()) return;
        postData('/subscriptions', formData)
        setSubmitted(true);
        setIsOpen(false);
        setStep(0);
    };

    return (
        <div>
            <button className="py-2 px-4 bg-[#B19482] hover:bg-[#8D705D] text-white rounded-lg w-[130px] font-semibold"   style={style} onClick={() => setIsOpen(true)}>
                {btnText}
            </button>
            {isOpen && (
                <div
                    className="fixed w-full h-full z-50 flex bg-[rgba(0,0,0,0.8)] top-0 left-0 justify-center items-center">
                    <div
                        className="flex flex-col bg-black p-6 rounded-lg transition-transform transform translate-y-0 animate-slide-in w-9/12">
                        <div className="close-btn-div">
                            <button className="close-btn hover:fill-[#e74c3c]" onClick={() => {
                                setIsOpen(false);
                                setStep(0)
                            }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.53332 19.3333L0.666656 17.4667L8.13332 10L0.666656 2.53333L2.53332 0.666668L9.99999 8.13333L17.4667 0.666668L19.3333 2.53333L11.8667 10L19.3333 17.4667L17.4667 19.3333L9.99999 11.8667L2.53332 19.3333Z"
                                        fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className=" w-full  rounded-lg">
                            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                                <div className='flex flex-col  w-full p-5 md:p-20'>

                                    {
                                        step === 0 ? (
                                            <>
                                                <h1 className='mb-10 text-xl md:text-3xl'>{queries[step]}</h1>
                                                <button
                                                    className='p-2 bg-[#B19482] text-white rounded text-md md:text-xl w-2/5 min-w-32'
                                                    type='button' onClick={handleNext}>Start
                                                </button>
                                            </>

                                        ) : step === 5 ? (
                                            <>
                                                <h1 className='mb-10 text-xl md:text-3xl'>{step}. {queries[step]}</h1>
                                                <textarea name="description"
                                                          className='bg-black p-4 border border-[#6E6B6B] w-full sm:text-md md:text-xl'
                                                          onChange={handleChange}
                                                          value={formData.description}
                                                          required={true}
                                                          placeholder='Text'></textarea>

                                                <div
                                                    className='text-right text-gray-400'>{formData.description.length}/500
                                                </div>
                                                <button
                                                    className='p-2  mt-8 w-2/5 min-w-32 bg-black text-white border border-[#B19482] rounded-lg text-md md:text-xl hover:bg-white hover:text-black'
                                                    type='button'
                                                    onClick={handleSubmit}>
                                                    Submit
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <h1 className='mb-10 text-xl md:text-3xl'>{step}. {queries[step]}</h1>

                                                <input
                                                    name={step === 1 ? "firstName" : step === 2 ? "lastName" : step === 3 ? "phone" : "email"}
                                                    value={formData[step === 1 ? "firstName" : step === 2 ? "lastName" : step === 3 ? "phone" : "email"]}
                                                    type="text"
                                                    placeholder='Write your answer here'
                                                    className='bg-black p-2 border-b border-b-[#6E6B6B] w-full sm:text-md md:text-3xl '
                                                    onChange={handleChange}
                                                    required={true}
                                                />
                                                <button
                                                    className='p-2  mt-8 w-2/5 min-w-32 bg-black text-white border border-[#B19482] rounded-lg text-md md:text-xl hover:bg-white hover:text-black'
                                                    type='button'
                                                    onClick={handleNext}>
                                                    Next
                                                </button>
                                            </>
                                        )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {submitted && <FeedbackPopUp content={content} onClose={() => setSubmitted(false)}/>}
        </div>
    );
}
