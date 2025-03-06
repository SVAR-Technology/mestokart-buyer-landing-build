"use client"
import Image from "next/image";

const JoinAsSeller: React.FC = () => {

    const handleJoinAsSellerClick = () => {
        window.open("https://seller-staging.mestokart.com/", "_blank");
    };

    return (
        <section className="relative bg-[#FCB332] text-black text-center py-16">
            {/* Circular Image with Feature Bubbles */}
            <div className="relative mx-auto">
                <Image
                    src="/assets/svg/SmartSeller.svg"
                    alt="Smart Seller"
                    width={600}
                    height={600}
                    className="object-cover mx-auto"
                />
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-bold mt-6">Become a Smart Seller on Mestokart!</h2>
            <p className="text-lg font-medium mt-2">Take your Business online with Mestokart!</p>
            <p className="text-lg font-medium">Reach more customers, Manage sales easily and grow smarter.</p>

            {/* Call-to-Action Button */}
            <button onClick={handleJoinAsSellerClick} className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200">
                Join as a Smart Seller
            </button>
        </section>
    );
};

export default JoinAsSeller;
