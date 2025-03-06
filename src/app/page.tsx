import AppDownload from "@/components/BuyerLanding/AppDownload";
import FeaturesSection from "@/components/BuyerLanding/FeaturesSection";
import Footer from "@/components/BuyerLanding/Footer";
import JoinAsSeller from "@/components/BuyerLanding/JoinAsSeller";
import Logo from "@/components/BuyerLanding/Logo";
import MobilePreview from "@/components/BuyerLanding/MobilePreview";

const MestoKart = () => {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] flex flex-col">

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row w-full">

        {/* Left Content (Text & Download) */}
        <div className="w-full bg-[#F7F4ED] lg:w-[60%] flex flex-col justify-center items-start px-6 md:px-16 lg:px-28 py-12">
          <Logo />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 leading-tight">
            Your <span className="text-[#F5802D] underline">Local Market,</span>
            <br />Now Online!
          </h1>
          <p className="text-gray-900 mt-2 font-semibold text-lg md:text-xl">
            Get fresh groceries and essentials delivered from nearby stores with Mestokart.
          </p>
          <AppDownload />
        </div>

        {/* Right Content (Mobile Preview) */}
        <div
          className="w-full lg:w-[40%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-screen bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: "url('/assets/svg/BuyerLanding.svg')" }}
        >
          <MobilePreview />
        </div>

      </div>

      {/* Features Section */}
      <div className="w-full">
        <FeaturesSection />
      </div>

      <JoinAsSeller />
      {/* <TestimonialsSlider /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MestoKart;
