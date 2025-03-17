import CallToActionSection from '@/components/HomePage/CallToAction';
import CategorySection from '@/components/HomePage/CategorySection';
import HeroSection from '@/components/HomePage/HeroSection';
import LegalCategorySection from '@/components/HomePage/LegalCategorySection';
import PlatformWorkingSection from '@/components/HomePage/PlatformWorkingSection';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <LegalCategorySection />
        <PlatformWorkingSection />
        <CategorySection />
        <CallToActionSection />
      </main>
    </>
  );
}
