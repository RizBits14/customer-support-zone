import React from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-20 px-10 py-12">
            <div className="flex flex-col md:flex-row md:justify-around">
                <div>
                    <h1 className="text-xl font-bold mb-3">CS --- Ticket System</h1>
                    <p className="text-gray-400 text-sm">
                        Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry.
                        Lorem <br /> Ipsum has been the industry's standard <br />dummy text ever since the 1500s,
                        when an <br />unknown printer took a galley of type and <br />scrambled it to make a type specimen book.
                    </p>
                </div>
                <br />

                <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-20">
                    <div>
                        <h1 className="text-lg font-semibold mb-3">Company</h1>
                        <ul className="space-y-2 text-gray-300">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Sales</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-lg font-semibold mb-3">Services</h1>
                        <ul className="space-y-2 text-gray-300">
                            <li>Product and Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-lg font-semibold mb-3">Information</h1>
                        <ul className="space-y-2 text-gray-300">
                            <li>Privacy and Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-lg font-semibold mb-3">Social Links</h1>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FaXTwitter className="text-lg" /> @CS --- Ticket System
                            </li>
                            <li className="flex items-center gap-2">
                                <FaInstagram className="text-lg" /> @CS --- Ticket System
                            </li>
                            <li className="flex items-center gap-2">
                                <FaFacebookF className="text-lg" /> @CS --- Ticket System
                            </li>
                            <li className="flex items-center gap-2">
                                <MdEmail className="text-lg" /> support@cst.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <hr className="border-gray-700" />
                <p className="text-center text-gray-400 text-sm mt-4">
                    © 2025 CS — Ticket System. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;