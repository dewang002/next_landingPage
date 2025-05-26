import { Leaf, ShieldCheck, Sparkles, Sliders } from 'lucide-react'
import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from './ui/card'

const features = [
    {
        icon: <Leaf className="h-6 w-6 text-green-600" />,
        title: 'Eco-Friendly Products',
        description: 'We bring you a tailored maid service that boosts the health and safety of your home in St. Louis. We want you to enjoy a clean and fresh space after each visit, and we’ll take the necessary steps to make sure of that',
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
        title: 'Trusted & Vetted Staff',
        description: 'We hire and train kind and skilled experts who are committed to making your home shine. We have developed industry-leading processes and practices that bring you safety, happiness, and convenience.',
    },
    {
        icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
        title: 'Spotless Guarantee',
        description: 'We have built software that helps manage your house cleaning experience with the ability to make requests, change your schedule, even update your payment on file. You will get a reminder by email, text, or phone before your cleaners come..',
    },
    {
        icon: <Sliders className="h-6 w-6 text-purple-500" />,
        title: 'Customizable Plans',
        description: 'Excellence is our goal, even for something as simple as getting your price right on our website. Now more than ever you should look for a professional service that has always committed to delivering great results and exceeding your expectations.',
    }
]

const Quality = () => {
    return (
        <section className="w-full py-16 px-6 flex flex-col items-center gap-10">

            <h1 className="text-2xl md:text-2xl text-center max-w-4xl font-semibold text-pink-600">
                We lead the industry through quality cleaning service, maximum safety & innovative technology.
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-7xl">
                {features.map((feature, index) => (
                    <Card key={index} className="flex flex-col justify-between ">
                        <CardHeader className="space-y-6">
                            <CardTitle className="flex flex-col items-center gap-2 text-lg font-semibold">
                                {feature.icon}
                                {feature.title}
                            </CardTitle>
                            <CardDescription className='text-center'>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent />
                    </Card>
                ))}
            </div>

        </section>
    )
}

export default Quality
