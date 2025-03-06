import Image from "next/image";

const AppDownload = () => {
    return (
        <div className="mt-8">
            <div className="flex justify-center lg:justify-start gap-4">
                <a href="#" className="w-40">
                    <Image src="/assets/svg/appStore.svg" alt="App Store" width={160} height={50} />
                </a>
                <a href="#" className="w-40">
                    <Image src="/assets/svg/playStore.svg" alt="Google Play" width={160} height={50} />
                </a>
            </div>
            <button
                className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-fit px-3 sm:px-4 md:px-6 py-2 rounded-md text-xs sm:text-sm md:text-lg font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                Download App
            </button>
        </div>
    );
};

export default AppDownload;
