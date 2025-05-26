import { PlayCircle, PlayCircleIcon } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Award Winning Service",
    description:
      "Better Life Home Cleaning is trusted locally and nationally for delivering exceptional quality and unmatched customer service.",
    image: "/story1.avif", // Replace with actual image paths
  },
  {
    title: "Delightful Customer Service",
    description:
      "We promise 100% satisfaction when you choose us. You can trust us to deliver a maid service that not only meets but exceeds your expectations.",
    image: "/story2.avif",
  },
  {
    title: "Positive Impact",
    description:
      "Giving back to our communities is at the heart of what we do. We’re committed to making your life better, cleaner, and healthier.",
    image: "/story3.avif",
  },
];

const Founder = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-green-600 mb-12">
        Consistently Delightful Cleaning
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center shadow-md">
                  <PlayCircle color="white" size={'2.5vw'} />
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-neutral-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founder;
