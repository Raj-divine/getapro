import CallToActionSection from '@/components/HomePage/CallToAction';
import CategorySection from '@/components/HomePage/CategorySection';
import HeroSection from '@/components/HomePage/HeroSection';
import LegalCategorySection from '@/components/HomePage/LegalCategorySection';
import PlatformWorkingSection from '@/components/HomePage/PlatformWorkingSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { createClient } from '@/utils/supabase/server';

export default async function HomePage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('professionals')
    .select(`
    hourly_rate,
    specialities, 
    category,
    rating,
    rating_count,
    profile_picture,
    professional_id,
    public_user_names(first_name, last_name)
  `)
    .eq('category', 'LAWYER')
    .limit(10);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {!error && <LegalCategorySection data={data} />}
        <PlatformWorkingSection />
        <CategorySection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
