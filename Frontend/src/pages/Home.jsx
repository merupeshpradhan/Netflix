import HeroSection from "./home/HeroSection";
import FeaturesSection from "./home/FeaturesSection";
import MoreReasonsSection from "./home/MoreReasonsSection";
import FAQSection from "./home/FAQSection";
import FooterSignup from "./home/FooterSignup";

function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <div className="w-full">
        <FeaturesSection />
        <MoreReasonsSection />
        <FAQSection />
        <FooterSignup />
      </div>
    </div>
  );
}

export default Home;
