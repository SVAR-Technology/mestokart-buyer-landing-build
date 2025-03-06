"use client";

import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const testimonials = [
    {
        name: "Nandani Roy",
        image: "/assets/profile2.png",
        feedback:
            "XILO has helped take my business from a traditional agency to an automated agency. We put all of our business through XILO forms and save a lot of time doing that.",
    },
    {
        name: "John Doe",
        image: "/assets/profile2.png",
        feedback:
            "This platform has revolutionized our workflow, making everything smoother and more efficient.",
    },
];

const TestimonialsSlider = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-white py-20 px-4">
            {/* Paper Image */}
            <div className="absolute top-0 left-0 w-full">
                <Image
                    src="/assets/svg/JoinAsSellerPaper.svg"
                    width={1920}
                    height={200}
                    alt="Testimonial Paper"
                    className="w-full h-auto"
                />
            </div>

            <section className="relative z-10 mt-[150px] flex flex-col items-center">
                <h2 className="text-center text-2xl font-medium mb-6 text-black">
                    Happy Customers, Happy Sellers
                </h2>

                {/* Testimonial Slider */}
                <TestimonialCard testimonials={testimonials} selectedIndex={selectedIndex} />
            </section>
        </div>
    );
};

export default TestimonialsSlider;
