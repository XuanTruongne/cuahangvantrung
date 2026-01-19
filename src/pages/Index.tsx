import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { RecentNews } from "@/components/home/RecentNews";
import { CTASection } from "@/components/home/CTASection";
import { TetHolidayPopup } from "@/components/TetHolidayPopup";

const Index = () => {
  return (
    <Layout>
      <TetHolidayPopup />
      <HeroSection />
      <ServicesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <RecentNews />
      <CTASection />
    </Layout>
  );
};

export default Index;
