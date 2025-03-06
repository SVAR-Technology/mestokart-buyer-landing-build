import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex flex-col items-start">
            <Image
                src="/assets/Landscape.png"
                alt="MestoKart Logo"
                width={352}
                height={59}
                className="w-[200px] sm:w-[220px] md:w-[280px] lg:w-[352px] h-auto"
            />
            <hr className="border border-orange-500 w-1/2 sm:w-1/3 md:w-1/4 mt-4 md:mt-6" />
        </div>
    );
};

export default Logo;
