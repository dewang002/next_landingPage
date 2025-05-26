import Image from "next/image"
import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

export default function Reviews() {
    const reviews = [
        {
            name: "Kate Smith",
            location: "St. Louis",
            stars: 5,
            text: `We've been using Better Life Maids to clean our home for over a year now. They consistently do a great job. I really appreciate the convenient scheduling (they are always willing to accomodate us). Our team is also great with my 3 year old son! He is usually at home with our nanny when they come to clean and I always hear about how much fun he has entertaining the cleaners 😜`,
            avatar: "/review1.avif",
            color: "text-sky-500",
        },
        {
            name: "Laura Muller Goddard",
            location: "St. Louis",
            stars: 5,
            text: `They did a great job. I don’t get my house cleaned so this was all new to me — they made it easy and I am thrilled to have the help — and thrilled to have a little more time to hang out with my family instead of cleaning.`,
            avatar: "/review2.avif",
            color: "text-orange-600",
        },
        {
            name: "Anonymous",
            location: "",
            stars: 5,
            text: `There is no better feeling than walking into a super clean home, and knowing that someone else took time to do it. Totally worth the expense, as this gives me time for other things that are important!`,
            avatar: "/review3.avif",
            color: "text-orange-600",
        },
        {
            name: "Anonymous",
            location: "",
            stars: 5,
            text: `I love Better Life Maids! I come home to a sparkling house– clean in places I would never get to on my own! My house smells fresh and clean and I don’t have to worry about harsh chemicals harming my kids or my pets! They are reliable and always respond to concerns or questions promptly. Excellent customer service and a perfectly clean house! Amanda, Ashley, and Lupe did a fantastic job!`,
            avatar: "/review4.avif",
            color: "text-pink-500",
        },
    ]

    const reviewCards = [
        {
            rating: 5,
            date: "May 21, 2025",
            text: "I’ve been with them for years, great service every time",
            initials: "MA",
            name: "Mari A.",
        },
        {
            rating: 5,
            date: "May 20, 2025",
            text: "Diane F. did a great job cleaning my home today. As always, Better Life Home Cleaning keeps everything clean and sanitized.",
            initials: "DK",
            name: "Dan Kelley",
        },
        {
            rating: 4,
            date: "May 20, 2025",
            text: "Great service!",
            initials: "KB",
            name: "Katie Boehmer",
        },
        {
            rating: 5,
            date: "May 20, 2025",
            text: "Ashley is a superstar. My house is sparkling every time Better Life home cleaning visits.",
            initials: "PK",
            name: "Patricia",
        },
    ];

    return (
        <section className="py-12 px-6 md:px-16 bg-white">
            <h2 className="text-center text-3xl font-bold text-pink-600 mb-10">
                Real reviews from our customers.
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col">
                    <Image
                        src="/Lady.avif"
                        alt="Main reviewer"
                        width={400}
                        height={400}
                        className="rounded-full"
                    />
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-4xl text-center">House Cleaning & Organization Designed for Delight</h1>
                        <p className="text-md">Better Life is committed to helping you spend more time on what matters most, this is our singular goal and promise to you. As one of the finest St. Louis cleaning companies and a leader in the industry, we enjoy bringing a consistently delightful service that sets the standard for health and safety. Our team employs proven yet innovative processes and practices, all designed to improve the quality of your life and keep your family and pets safe. We are known and loved for the eco-friendly cleaning services we provide across St. Louis and the area, so leave the chores to us and enjoy a healthy home and more time for what truly matters. And now you can have us help implement organizational systems in your home as well. Just let us know how we can help.</p>
                        <h2 className="text-xl">– Angela Ricketts, Founder</h2>
                        <Button variant={"outline"} className="w-fit rounded-full text-pink-500 outline outline-pink-500">Get Instant Price</Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-gray-50 p-5 rounded-lg shadow-sm">
                            <div className={`${review.color} mb-2`}>
                                {"★".repeat(review.stars)}
                            </div>
                            <p className="text-gray-700 text-sm mb-4">{review.text}</p>
                            <div className="flex items-center gap-3">
                                <Image
                                    src={review.avatar}
                                    alt={review.name}
                                    width={40}
                                    height={10}
                                    className="rounded-full"
                                />
                                <div>
                                    <div className={`font-semibold ${review.color}`}>
                                        {review.name}
                                    </div>
                                    {review.location && (
                                        <div className="text-sm text-gray-500">{review.location}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <Carousel>
                    <CarouselContent>
                        {reviewCards.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className="p-2 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="h-full rounded-xl border shadow-sm p-4 flex flex-col justify-between">
                                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                                        <span>{review.rating}</span>
                                        <span>{review.date}</span>
                                    </div>
                                    <div className="text-yellow-500 mb-2">
                                        {"★".repeat(review.rating)}
                                        {review.rating < 5 &&
                                            <span className="text-gray-300">
                                                {"★".repeat(5 - review.rating)}
                                            </span>
                                        }
                                    </div>
                                    <p className="text-sm text-gray-800 mb-4">{review.text}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-purple-100 text-purple-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center text-xs">
                                                {review.initials}
                                            </div>
                                            <span className="text-sm font-medium">{review.name}</span>
                                        </div>
                                        <img src="/google-icon.svg" alt="Google" className="w-4 h-4" />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}
