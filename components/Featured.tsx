import Image from "next/image";
import React from "react";

const logos = [
    "alist",
    "topworkplaces",
    "stlpostdispatch",
    "times",
    "betterhomes",
    "ksdk",
    "businessfleet",
    "greenchild",
];

const Featured = () => {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-xl font-semibold text-neutral-800 mb-8">
                    <span className="inline-block border-t border-neutral-300 w-24 align-middle mr-4" />
                    FEATURED BY
                    <span className="inline-block border-t border-neutral-300 w-24 align-middle ml-4" />
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
                    {logos.map((src, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <h1 className="text-2xl font-black">{src}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
