import React from 'react'
import { Button } from './ui/button'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from './ui/drawer'

const ServiceArea = () => {
    return (
        <div className='h-10 w-full flex items-center justify-center'>
            <Drawer>
                <DrawerTrigger>
                    <Button variant={'outline'} className='rounded-full'>Click to See Service Areas</Button>
                </DrawerTrigger>
                <DrawerContent className='flex flex-col items-center'>
                    <DrawerHeader>
                        <DrawerTitle>India </DrawerTitle>
                    </DrawerHeader>
                    <DrawerHeader>
                        <DrawerTitle>USA</DrawerTitle>
                    </DrawerHeader>
                    <DrawerHeader>
                        <DrawerTitle>Bangladesh</DrawerTitle>
                    </DrawerHeader>
                    <DrawerHeader>
                        <DrawerTitle>Nepal</DrawerTitle>
                    </DrawerHeader>
                    <DrawerHeader>
                        <DrawerTitle>Europe</DrawerTitle>
                    </DrawerHeader>
                    <DrawerHeader>
                        <DrawerTitle>Russia</DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default ServiceArea