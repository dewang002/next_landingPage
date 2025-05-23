"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from 'motion/react-client';
import { Button } from './ui/button';
import Image from 'next/image';

const sentences = [
    "products",
    "service",
    "people"
];

const HeroPage = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    const sentenceVariants = {
        initial: {
            opacity: 0,
            y: -25,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 0.8,
            }
        },
        exit: {
            opacity: 0,
            y: 25,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            }
        },
    };

    return (
        <div className='h-[100vh] w-full'>
            <div className='h-40 w-full flex text-4xl justify-center font-semibold mt-24'>
                <span style={{ color: '#333' }}>Making life better, with </span>
                <div
                    className='inline-block mx-8 min-w-[150px] h-[60px] relative overflow-hidden flex-shrink-0 '>
                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={currentSentenceIndex}
                            variants={sentenceVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            style={{
                                display: 'inline-block',
                                color: 'blue',
                                position: 'absolute',
                                left: '0',
                                whiteSpace: 'nowrap',
                            }}>
                            {sentences[currentSentenceIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <span> you trust</span>
            </div>

            <div className='w-full h-96 flex'>
                <div className='w-[60%] h-full flex flex-col gap-10 px-24'>
                    <div className='text-6xl font-bold'>Experience Elevated St. Louis House Cleaning</div>
                    <div>At Better Life Home Cleaning, our mission is to enhance your quality of life through exceptional cleaning services. Prioritizing health and safety, we provide comprehensive St. Louis house cleaning solutions tailored to your needs. Discover the difference with Better Life Home Cleaning today.</div>
                    <Button className='rounded-full p-6 w-fit'>Get Instant Price</Button>
                </div>
                <div className='w-[40%] h-full'>
                    <Image src={'/heroImage.webp'} height={360} width={360} alt='heroimg' />
                </div>
            </div>

        </div>
    );
};

export default HeroPage;