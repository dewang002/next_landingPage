"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-24 py-16'>
            <div className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-center flex flex-wrap justify-center items-center gap-3'>
                <span className="text-gray-800">Making life better, with</span>
                <div className='relative inline-block lg:h-[50px] h-[40px] min-w-[120px] sm:min-w-[170px] overflow-hidden'>
                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={currentSentenceIndex}
                            variants={sentenceVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute left-0 text-blue-600 whitespace-nowrap"
                        >
                            {sentences[currentSentenceIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <span className="text-gray-800">you trust</span>
            </div>

            <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-12'>
                <div className='w-full lg:w-3/5 flex flex-col gap-6 text-center lg:text-left'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                        Experience Elevated St. Louis House Cleaning
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600'>
                        At Better Life Home Cleaning, our mission is to enhance your quality of life through exceptional cleaning services. Prioritizing health and safety, we provide comprehensive St. Louis house cleaning solutions tailored to your needs. Discover the difference with Better Life Home Cleaning today.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Button className='rounded-full px-6 py-3 text-base sm:text-lg'>Get Instant Price</Button>
                    </div>
                </div>

                <div className='w-full lg:w-2/5 flex justify-center'>
                    <Image
                        src="/heroImage.webp"
                        width={400}
                        height={400}
                        alt="heroimg"
                        className="w-full max-w-[360px] h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
