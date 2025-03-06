import Image from "next/image";

const MobilePreview = () => {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Image
                src="/assets/BuyerMobile.svg"
                alt="Grocery Background"
                width={320}
                height={320}
                className="w-[140px] sm:w-[140px] md:w-[160px] lg:w-[280px] xl:w-[300px] h-auto rounded-xl shadow-lg"
            />
        </div>
    );
};

export default MobilePreview;
