import CallToActionSection from '@/components/HomePage/CallToAction';
import CategorySection from '@/components/HomePage/CategorySection';
import HeroSection from '@/components/HomePage/HeroSection';
import LegalCategorySection from '@/components/HomePage/LegalCategorySection';
import PlatformWorkingSection from '@/components/HomePage/PlatformWorkingSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LegalCategorySection />
        <PlatformWorkingSection />
        <CategorySection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
