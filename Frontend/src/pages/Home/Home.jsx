import FAQSection from "./Section/FAQSection";
import FooterDataLayout from "./Section/FooterDataLayout";
import FooterSignup from "./Section/FooterSignup";
import HeroSection from "./Section/HeroSection";
import MoreReasonsSection from "./Section/MoreReasonsSection";
import TrandingNowSection from "./Section/TrandingNowSection";


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
