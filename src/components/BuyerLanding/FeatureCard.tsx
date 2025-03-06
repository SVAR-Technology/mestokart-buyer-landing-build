import Image from "next/image";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    image: string;
    applyBg?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image, applyBg }) => {
    return (
        <div className={`flex flex-col lg:flex-row w-full items-center py-12 px-6 sm:px-12 md:px-20 ${applyBg ? "bg-[#F7F4ED]" : ""}`}>

            {/* Left Content - Increased Left Padding */}
            <div className="w-full lg:w-[60%] flex flex-col gap-4 text-center lg:text-left lg:pl-28">
                <Image src={icon} alt="Feature Icon" width={80} height={80} className="mx-auto lg:mx-0" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
                <p className="text-gray-600 text-sm sm:text-base font-medium">{description}</p>
            </div>

            {/* Right Content - Responsive Image */}
            <div className="w-full lg:w-[40%] flex justify-center items-center mt-6 lg:mt-0">
                <Image
                    src={image}
                    alt="Feature Preview"
                    width={280}
                    height={280}
                    className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[350px] h-auto max-w-xs md:max-w-sm lg:max-w-md"
                />
            </div>
        </div>
    );
};

export default FeatureCard;
