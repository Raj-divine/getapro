import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { createClient } from '@/utils/supabase/server';
import DetailsSection from './components/DetailsSection';
import ReviewSection from './components/ReviewSection';
import BookingSection from './components/BookingSection';

export default async function BookSessionPage({
  params,
}: {
  params: Promise<{ professionalId: string }>;
}) {
  const { professionalId } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('professionals')
    .select('*, public_user_names(first_name, last_name)')
    .eq('professional_id', professionalId)
    .single();
  // TODO: Add error handling
  if (!data || error) {
    throw new Error('Failed to fetch professional');
  }

  return (
    <>
      <Navbar />
      <main>
        <div className='flex flex-col sm:flex sm:flex-row gap-5 px-5 sm:px-16 py-5 max-xs:h-full  h-[105vh]'>
          <div className='sm:w-[70%] flex flex-col gap-5 w-full max-sm:hidden'>
            <DetailsSection data={data} />
            <ReviewSection />
          </div>

          <div className='max-sm:hidden w-[30%]'>
            <BookingSection />
          </div>

          <div className='sm:w-[70%] flex flex-col gap-5 w-full sm:hidden'>
            <DetailsSection data={data} />
            <BookingSection />
          </div>

          <div className='sm:hidden'>
            <ReviewSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
