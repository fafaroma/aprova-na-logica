import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ProductSection from "@/components/landing/ProductSection";
import ContentSection from "@/components/landing/ContentSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import AuthorSection from "@/components/landing/AuthorSection";
import PricingSection from "@/components/landing/PricingSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <ContentSection />
      <TestimonialsSection />
      <ForWhoSection />
      <AuthorSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
