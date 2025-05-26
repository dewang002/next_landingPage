import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
    return (
        <footer className="px-6 sm:px-12 py-8 flex flex-col gap-6 bg-white">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm sm:text-base text-gray-700">
                    <li><a href="#">Area</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Customer Portal</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>

                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    <Button
                        className="rounded-full outline outline-pink-500 text-pink-500 text-sm sm:text-base"
                        variant="outline"
                    >
                        314-288-0659
                    </Button>
                    <Button
                        className="rounded-full outline outline-green-400 text-green-400 text-sm sm:text-base"
                        variant="outline"
                    >
                        Book Now
                    </Button>
                </div>
            </div>

            <div className="text-center text-xs sm:text-sm text-gray-600">
                © 2008 - 2025 Better Life Maids | All Rights Reserved | Privacy Policy | Site by: <a href="https://kobami.com" className="underline">Kobami.com</a>
            </div>
        </footer>
    );
};

export default Footer;
