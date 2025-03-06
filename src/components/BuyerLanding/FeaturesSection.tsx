import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
    return (
        <div className="bg-[#FDFBF7]">
            {/* First Feature */}
            <FeatureCard
                icon="/assets/svg/RediscoverRoute.svg"
                title="Rediscover your local favourite"
                description="Explore your go-to neighbourhood stores, now online and accessible anytime."
                image="/assets/svg/NearbyStore.svg"
            />

            {/* Second Feature */}
            <FeatureCard
                icon="/assets/svg/DeliveryBox.svg"
                title="Smart shopping for monthly Groceries"
                description="Your trusted stores, just a click away! Shop essentials from your favourite neighbourhood stores with secure payment and quick refunds."
                image="/assets/svg/StoreDetail.svg"
                applyBg={true}
            />
        </div>
    );
};

export default FeaturesSection;
