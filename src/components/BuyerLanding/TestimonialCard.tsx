import Image from "next/image";

interface TestimonialProps {
    testimonials: { name: string; image: string; feedback: string }[];
    selectedIndex: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonials, selectedIndex }) => {
    return (
        <div className="bg-white border text-black shadow-md p-8 text-center mx-auto flex flex-col items-center justify-center relative overflow-hidden
            w-[90%] sm:w-[600px] md:w-[800px] lg:w-[900px] max-w-full h-auto sm:h-[280px] lg:h-[320px]"
        >
            {/* Sliding Content */}
            <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="min-w-full flex flex-col items-center justify-center px-4 sm:px-6"
                    >
                        <Image src={testimonial.image} alt={testimonial.name} width={84} height={84} className="rounded-full mx-auto" />
                        <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg lg:w-[500px]">
                            {testimonial.feedback}
                        </p>
                        <h4 className="font-semibold mt-2 text-base sm:text-lg">{testimonial.name}</h4>
                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 flex space-x-2">
                {testimonials.map((_, dotIndex) => (
                    <div
                        key={dotIndex}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${selectedIndex === dotIndex ? "bg-[#F16101] scale-110" : "bg-[#FFDABF]"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialCard;
