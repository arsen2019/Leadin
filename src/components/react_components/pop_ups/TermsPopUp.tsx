import {useState} from "react";
import "../../../styles/modal.css";


export default function PrivacyPolicyPopUp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <div className="pointer">
                <p className='cursor-pointer' onClick={() => setIsOpen(true)}>Terms and Conditions</p>
            </div>
            {isOpen && (
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
                                        <h2 className="text-3xl font-medium pb-5">
                                            Terms and Conditions
                                        </h2>
                                    </div>
                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">1. Introduction</h3>
                                        <p className="p-4 text-base text-gray-700">These Terms and Conditions govern the
                                            use of LEADIN Agency's website
                                            and services. By accessing our website and engaging in our services, you
                                            agree to these terms in full.
                                            If you do not agree, please refrain from using our services.</p>
                                    </div>
                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">2. Services Provided</h3>
                                        <p className="p-4 text-base text-gray-700">LEADIN Agency provides digital
                                            marketing, content creation, social
                                            media management, personal branding, and related services. The specifics of
                                            each service are detailed in
                                            individual client contracts.</p>
                                    </div>
                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">3. User Responsibilities</h3>
                                        <p className="p-5 text-base text-gray-700">Users of our website and services
                                            agree to:</p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                            <li>Provide accurate and complete information when engaging with our
                                                services.
                                            </li>
                                            <li>Not use our services for any illegal or unauthorized purposes.</li>
                                            <li>Maintain the confidentiality of any account details and passwords.</li>
                                        </ul>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">4. Payments and Refunds</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                            <li>Payments for services must be made as agreed upon in individual
                                                contracts or invoices.
                                            </li>
                                            <li>Refunds are only provided in exceptional cases and are subject to
                                                review.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">5. Intellectual Property</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                            <li>All content, including text, graphics, logos, and media created by
                                                LEADIN Agency, remains our intellectual property unless otherwise
                                                agreed.
                                            </li>
                                            <li>Clients may not reproduce, distribute, or modify content without our
                                                written permission
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">6. Limitation of Liability</h3>
                                        <p className="p-5 text-base text-gray-700">LEADIN Agency is not liable for:</p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                            <li>Indirect or consequential losses resulting from the use of our
                                                services.
                                            </li>
                                            <li>Service interruptions caused by third-party platforms (e.g., social
                                                media outages).
                                            </li>
                                            <li>Misuse of content by third parties.</li>
                                        </ul>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">7. Termination of Services</h3>
                                        <p className="p-4 text-base text-gray-700">We reserve the right to terminate or
                                            suspend services if clients violate these terms or engage in fraudulent or
                                            unethical activities.</p>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl">8. Changes to This Policy</h3>
                                        <p className="p-4 text-base text-gray-700">We may update this Privacy Policy
                                            periodically. Any changes will be posted on this page with the updated
                                            effective date.</p>
                                    </div>

                                    <div className="py-5">
                                        <h3 className="font-semibold text-2xl pb-4">9. Contact Us</h3>
                                        <p className="px-4 text-base text-gray-700">For privacy concerns, reach out
                                            to:</p>
                                        <p className="px-4 text-base text-gray-700">📩 hello@leadin.agency</p>
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

