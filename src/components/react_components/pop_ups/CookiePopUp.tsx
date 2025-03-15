import {useState} from "react";
import "../../../styles/modal.css";


export default function CookiePolicyPopUp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <div className="pointer">
                <p className='cursor-pointer' onClick={()=> setIsOpen(true)}>Cookie Policy</p>
            </div>
            { isOpen && (
                <div className="modal-overlay">
                    <div className="flex flex-col">

                        <div className=" w-[90%] max-w-[1200px] p-0 mx-auto">

                            <div className="close-btn-div bg-[#fff] py-5 ">
                                <button className="close-btn mr-5" onClick={() => setIsOpen(false)}>
                                    <svg className='invert' width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.53332 19.3333L0.666656 17.4667L8.13332 10L0.666656 2.53333L2.53332 0.666668L9.99999 8.13333L17.4667 0.666668L19.3333 2.53333L11.8667 10L19.3333 17.4667L17.4667 19.3333L9.99999 11.8667L2.53332 19.3333Z"
                                            fill="white"/>
                                    </svg>

                                </button>
                            </div>
                            <div className="mx-auto w-[80wh] text-[#000] h-[80vh] overflow-y-scroll bg-white">
                                <div className="px-5 md:px-20 pb-10">
                                    <div className="border-b-2 border-gray-400">
                                        <h2 className="text-3xl font-medium pb-5">Cookie Policy
                                        </h2>
                                    </div>
                                    <div className="py-5 mt-10">
                                        <h3 className="font-semibold text-2xl">1. Introduction</h3>
                                        <p className="p-4 text-base text-gray-700">LEADIN Agency uses cookies to enhance
                                            your browsing experience, improve website performance, and deliver
                                            personalized content. This policy explains how we use cookies and how you
                                            can manage them..</p>
                                    </div>
                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">2. What Are Cookies?</h3>
                                        <p className="p-4 text-base text-gray-700">Cookies are small text files stored
                                            on your device when you visit a website. They help track user behavior and
                                            improve website performance.</p>
                                    </div>
                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">3. User Responsibilities</h3>
                                        <p className="p-5 text-base text-gray-700">Users of our website and services
                                            agree to:</p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                            <li><span className="font-bold">Essential Cookies:</span>Required for
                                                website functionality
                                            </li>
                                            <li><span className="font-bold">Analytical Cookies:</span>Help us understand
                                                user interactions and website traffic (e.g., Google Analytics)
                                            </li>
                                            <li><span className="font-bold">Marketing Cookies:</span>Used for targeted
                                                advertising and campaign tracking
                                            </li>
                                            <li><span className="font-bold">Third-Party Cookies:</span>Set by external
                                                platforms like Facebook and LinkedIn for retargeting
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">4. Managing Your Cookie Preferences</h3>
                                        <p className="px-5 text-base text-gray-700 pt-5">You can: </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 px-10">
                                            <li>Adjust cookie settings in your browser</li>
                                            <li>Disable cookies (note: this may impact website functionality)</li>
                                            <li>Opt out of personalized ads using third-party tools</li>
                                        </ul>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">5. Updates to This Policy</h3>
                                        <p className="p-4 text-base text-gray-700">We may update our Cookie Policy
                                            periodically. Changes will be reflected on this page.</p>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">6. Contact Us</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                            <li>Indirect or consequential losses resulting from the use of our
                                                services.
                                            </li>
                                            <li>For cookie-related inquiries, contact:</li>
                                            <p>📩 hello@leadin.agency</p>
                                            <li>Misuse of content by third parties.</li>
                                        </ul>
                                        <p className="p-5 text-base text-gray-700">By continuing to use our website, you
                                            consent to our use of cookies as described in this policy.</p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            )}
        </div>


    );

}

