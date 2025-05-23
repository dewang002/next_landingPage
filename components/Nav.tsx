import React from 'react'
import { Button } from './ui/button'
import { Menu, Sheet } from 'lucide-react'
import Image from 'next/image'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import SideBar from './SideBar'

const Nav = () => {
    return (
        <div className='h-16 w-full py-2 shadow-lg'>
            <div className='px-2 flex items-center justify-between'>

                <div className='rounded-full overflow-hidden'>
                    <Image height={50} width={50} src={'/logo.png'} alt='logo' />
                </div>
                <div className='flex gap-4'>
                    <p className='text-lg'>Get your free estimate today</p>
                    <Button variant={'outline'} className='outline text-blue-400 outline-blue-400 rounded-full '>314-288-0659</Button>
                    <Button variant={'outline'} className='outline text-green-400 outline-green-400 rounded-full '>Book Now</Button>
                </div>
                
                    <SideBar/>

            </div>
        </div>
    )
}

export default Nav