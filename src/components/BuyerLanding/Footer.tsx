import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer
            className="relative bg-cover bg-center text-white py-10"
            style={{ backgroundImage: "url('/assets/store-2.png')" }}
        >
            {/* Overlay with Blue Tint */}
            <div className="absolute inset-0 bg-opacity-50 bg-[#111827]/70"></div>

            <div className="relative max-w-6xl mx-auto px-6 flex flex-col justify-between md:flex-wrap lg:flex-row gap-[53px] py-8 border-b border-white/30">
                {/* Left Section - Logo & App Download */}
                <div className="w-full lg:w-auto">
                    <div className="flex items-center justify-center lg:w-[300px] lg:justify-start">
                        <Image src="/assets/logo.svg" alt="MestoKart" width={150} height={150} />
                    </div>
                    {/* <p className="text-gray-200 text-sm mt-4 text-center lg:text-left">
                        Download the MestoKart Business App.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-3 mt-4">
                        <Image src="/assets/svg/appStore.svg" alt="App Store" width={120} height={40} className="cursor-pointer" />
                        <Image src="/assets/svg/playStore.svg" alt="Google Play" width={120} height={40} className="cursor-pointer" />
                    </div> */}
                </div>

                {/* Center Section - Company Details */}
                <div className="w-full lg:w-auto text-center lg:text-left">
                    <h3 className="text-[14px]">SVAR Technology Private Limited</h3>
                    <p className="text-gray-200 text-sm mt-2">CIN: U62099RJ2023PTC086006</p>
                </div>

                <div className="w-full lg:w-auto text-center lg:text-left">
                    <a href="/privacy-policy" className="block text-gray-200 hover:text-white text-sm">Privacy Policy</a>
                    <a href="/terms-conditions" className="block text-gray-200 hover:text-white text-sm">Terms & Conditions</a>
                </div>

                {/* Right Section - Contact Info */}
                <div className="w-full lg:w-auto text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-gray-200 text-sm flex items-center gap-2 mt-1">
                            <Image src="/assets/svg/phone.svg" alt="Phone" width={20} height={20} />
                            +91 - 99291 31988
                        </p>
                        <p className="text-gray-200 text-sm flex items-center gap-2 mt-1">
                            <Image src="/assets/svg/mail.svg" alt="Mail" width={20} height={20} />
                            support@mestokart.com
                        </p>
                        <p className="text-gray-200 text-sm flex items-center gap-2 mt-1">
                            <Image src="/assets/svg/location.svg" alt="Location" width={20} height={20} />
                            Udaipur, Rajasthan, India
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                        <a href="https://www.facebook.com/profile.php?id=61572229874784" target="_blank" className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-200 transition flex items-center justify-center">
                            <FaFacebook className="text-xl" />
                        </a>
                        <a href="https://x.com/mestokartindia" target="_blank" className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-200 transition flex items-center justify-center">
                            <FaXTwitter className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/mestokart-india-917605349/" className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-200 transition flex items-center justify-center">
                            <FaLinkedinIn className="text-xl" />
                        </a>
                        <a href="https://www.instagram.com/mestokartofficial/?hl=en" target="_blank" className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-200 transition flex items-center justify-center">
                            <FaInstagram className="text-xl" />
                        </a>
                        {/* <a href="#" className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-200 transition flex items-center justify-center">
                            <RiTelegram2Fill className="text-xl" />
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <p className="relative text-gray-200  text-center text-sm mt-6">
                © MestoKart. All rights reserved 2025.
            </p>
        </footer>
    );
};

export default Footer;
