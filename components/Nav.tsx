import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import SideBar from './SideBar';

const Nav = () => {
    return (
        <header className="w-full shadow-lg py-2 px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between h-16">
                <div className="rounded-full overflow-hidden flex-shrink-0">
                    <Image height={50} width={50} src="/logo.png" alt="logo" />
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <p className="text-sm lg:text-base whitespace-nowrap">Get your free estimate today</p>
                    <Button
                        variant={'outline'}
                        className="text-blue-500 border-blue-400 rounded-full px-4 py-2 text-sm lg:text-base"
                    >
                        314-288-0659
                    </Button>
                    <Button
                        variant={'outline'}
                        className="text-green-500 border-green-400 rounded-full px-4 py-2 text-sm lg:text-base"
                    >
                        Book Now
                    </Button>
                </div>

                <SideBar />
            </div>
        </header>
    );
};

export default Nav;
