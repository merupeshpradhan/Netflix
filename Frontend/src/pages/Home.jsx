import Side1 from "./home/HeroSection";
import Side2 from "./home/FeaturesSection";
import Side3 from "./home/MoreReasonsSection";
import HeroSection from "./home/HeroSection";
import FeaturesSection from "./home/FeaturesSection";
import MoreReasonsSection from "./home/MoreReasonsSection";

function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <div className="w-full">
        <FeaturesSection />
        <MoreReasonsSection />
      </div>
    </div>
  );
}

export default Home;
