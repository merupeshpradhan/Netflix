import HeroSection from "./home/HeroSection";
import MoreReasonsSection from "./home/MoreReasonsSection";
import FAQSection from "./home/FAQSection";
import FooterSignup from "./home/FooterSignup";
import FooterDataLayout from "./home/FooterDataLayout";
import TrandingNowSection from "./home/TrandingNowSection";

function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <div className="w-full bg-black">
        <TrandingNowSection />
        <MoreReasonsSection />
        <FAQSection />
        <FooterSignup />
        <FooterDataLayout />
      </div>
    </div>
  );
}

export default Home;
