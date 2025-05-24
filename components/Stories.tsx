'use client';

import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import { video } from 'motion/react-client';

const stories = [
    {
        title: "Stress Free Cleaning",
        name: "Holly",
        description: "Holly can finally enjoy having friends and family over without a second thought about cleaning!",
        thumbnail: "/story1.avif",
        video: "https://www.youtube.com/embed/rYEDA3JcQqw?si=DYf9PDHj9y4t4eyL"
    },
    {
        title: "A Busy Mom’s Story",
        name: "Kelly",
        description: "Kelly now has more time for the moments that truly count, making memories with loved ones and doing what she loves most.",
        thumbnail: "/story2.avif",
        video: "https://www.youtube.com/embed/lWA2pjMjpBs?si=FfQyDjDVOPumeFd8"
    },
    {
        title: "Work Life Balance",
        name: "Kelli",
        description: "Kelli was a new wife who turned her hectic home life into a worry-free sanctuary with the help of Better Life Maids.",
        thumbnail: "/story3.avif",
        video: "https://www.youtube.com/embed/PMivT7MJ41M?si=EThhfj_Gjc80fx6w"
    },
    {
        title: "Extra Support",
        name: "Debbie",
        description: "Debbie chose Better Life to support her during a challenging time while her husband was in home hospice.",
        thumbnail: "/story4.avif",
        video: "https://www.youtube.com/embed/IpFX2vq8HKw?si=Xn8cu2VJD-IZD0x7"
    },
];

export default function Stories() {
    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-semibold text-green-600 mb-12">Real Customer Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-12">
                {stories.map((story, idx) => (
                    <div key={idx} className="rounded-xl relative overflow-hidden shadow-md bg-white">
                        <div className="relative">
                            <Image
                                src={story.thumbnail}
                                alt={`${story.name}'s story`}
                                width={400}
                                height={250}
                                className="w-full h-56 object-cover"
                            />
                            <Dialog>
                                <DialogTrigger className='absolute top-[50%] z-50'>
                                    <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-16 h-16 opacity-80" />
                                </DialogTrigger>
                                <DialogContent className=' h-[415px]'>
                                    <iframe
                                        className='h-full w-full'
                                        src={story.video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    ></iframe>
                                </DialogContent>
                            </Dialog>

                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                            <p className="text-gray-600 text-sm">{story.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
