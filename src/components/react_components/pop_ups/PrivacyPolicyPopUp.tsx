import {useState} from "react";
import "../../../styles/modal.css";


export default function PrivacyPolicyPopUp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <div className="pointer">
                <p className='cursor-pointer' onClick={()=> setIsOpen(true)}>Privacy Policy</p>
            </div>
            { isOpen && (
            <div className="modal-overlay">
                <div className="flex flex-col">

                    <div className=" w-[90%] max-w-[1200px] p-0 mx-auto">

                        <div className="close-btn-div bg-[#fff] py-5 ">
                            <button className="close-btn mr-5" onClick={()=>setIsOpen(false)}>
                                <svg className='invert' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.53332 19.3333L0.666656 17.4667L8.13332 10L0.666656 2.53333L2.53332 0.666668L9.99999 8.13333L17.4667 0.666668L19.3333 2.53333L11.8667 10L19.3333 17.4667L17.4667 19.3333L9.99999 11.8667L2.53332 19.3333Z" fill="white"/>
                                </svg>

                            </button>
                        </div>
                        <div className="mx-auto w-[80wh] text-[#000] h-[80vh] overflow-y-scroll bg-white">
                            <div className="px-5 md:px-20 pb-10">
                                <div className="border-b-2 border-gray-400">
                                    <h2 className="text-3xl font-medium ">
                                        Privacy Policy of <span className="font-extrabold">leadin.agency</span>
                                    </h2>
                                    <p className="py-5 text-xl">This Website collects some Personal Data from its Users.</p>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">1. Introduction</h3>
                                    <p className="p-4 text-base text-gray-700">LEADIN Agency ("we," "us," or "our") is committed to protecting the
                                        privacy of our
                                        clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, store, and
                                        protect personal data in compliance with applicable data protection laws.
                                        By using our website or engaging with our services, you agree to the collection and use of information
                                        in accordance with this policy.</p>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">2. Information We Collect</h3>
                                    <p className="p-4 text-base text-gray-700">We collect and process various types of information, including but
                                        not limited
                                        to:</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">2.1. Personal Information</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-5">
                                            <li>Full name</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                            <li>Social media handles</li>
                                            <li>Job title and company name</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">2.2. Business Information</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-5">
                                            <li>Company name</li>
                                            <li>Industry</li>
                                            <li>Business objectives</li>
                                            <li>Marketing preferences</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">2.3. Website Usage Data</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-5">
                                            <li>IP address</li>
                                            <li>Browser type and version</li>
                                            <li>Pages visited on our website</li>
                                            <li>Time spent on pages</li>
                                            <li>Referring website links</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">2.4. Marketing & Communication Preferences</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1 p-5">
                                            <li>Newsletter subscriptions</li>
                                            <li>Contact preferences</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">3. How We Use Your Information</h3>
                                    <p className="p-5 text-base text-gray-700">We process the collected data to:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                        <li>Provide and improve our services</li>
                                        <li>Communicate with clients and prospects</li>
                                        <li>Manage digital marketing campaigns</li>
                                        <li>Enhance user experience on our website</li>
                                        <li>Personalize marketing communications</li>
                                        <li>Comply with legal and regulatory requirements</li>
                                    </ul>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">4. How We Share Your Information</h3>
                                    <p className="p-5 text-base text-gray-700">We do not sell or rent your personal data. However, we may share your information with:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                        <li>Service Providers: Third-party vendors assisting with advertising, marketing, and content production</li>
                                        <li>Legal Authorities: If required by law to comply with a legal obligation</li>
                                        <li>Business Transfers: In the case of a merger, sale, or acquisition of the agency</li>
                                    </ul>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">5. Data Security & Retention</h3>
                                    <p className="p-4 text-base text-gray-700">We implement strict security measures to prevent unauthorized access, disclosure, or alteration of your personal data. We retain personal information for as long as necessary to fulfill business obligations and legal requirements.</p>
                                </div>

                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">6. Your Rights & Choices</h3>
                                    <p className="p-5 text-base text-gray-700">You have the right to:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 p-4">
                                        <li>Access, update, or delete your personal data</li>
                                        <li>Opt-out of marketing communications</li>
                                        <li>Request a copy of the data we hold about you</li>
                                    </ul>
                                    <p className="p-5 text-base text-gray-700">For requests, please contact hello@leadin.agency.</p>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">7. Cookie Policy</h3>
                                    <p className="p-4 text-base text-gray-700">We use cookies and similar tracking technologies to improve user experience and analyze website traffic. For details, refer to our Cookie Policy below.</p>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl">8. Changes to This Policy</h3>
                                    <p className="p-4 text-base text-gray-700">We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date.</p>
                                </div>
                                <div className="py-5">
                                    <h3 className="font-semibold text-2xl pb-4">9. Contact Us</h3>
                                    <p className="px-4 text-base text-gray-700">For privacy concerns, reach out to:</p>
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

