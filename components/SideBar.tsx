import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const SideBar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button><Menu /></Button>
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-10'>
                <SheetHeader>
                    <SheetTitle>
                        <Button variant={'outline'} className='outline text-blue-400 outline-blue-400 rounded-full '>314-288-0659</Button>
                    </SheetTitle>
                </SheetHeader>
                <SheetHeader>
                    <SheetTitle>
                        <Button variant={'outline'} className='outline text-green-400 outline-green-400 rounded-full '>Book Now</Button>
                    </SheetTitle>
                </SheetHeader>
                <SheetHeader className='cursor-pointer'>
                    <SheetTitle>Careers</SheetTitle>
                </SheetHeader>
                <SheetHeader className='cursor-pointer'>
                    <SheetTitle>Customer Portal</SheetTitle>
                </SheetHeader>
                <SheetHeader className='cursor-pointer'>
                    <SheetTitle>About Us</SheetTitle>
                </SheetHeader>
                <SheetHeader className='cursor-pointer'>
                    <SheetTitle>Services</SheetTitle>
                </SheetHeader>
                <SheetHeader className='cursor-pointer'>
                    <SheetTitle>Areas</SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default SideBar