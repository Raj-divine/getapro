import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createClient } from "@/utils/supabase/server";
import DetailsSection from "./components/DetailsSection";
import ReviewSection from "./components/ReviewSection";
import BookingSection from "./components/BookingSection";

export default async function BookSessionPage({
    params,
}: {
    params: Promise<{ professionalId: string }>;
}) {
    const { professionalId } = await params;
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("professionals")
        .select("*, public_user_names(first_name, last_name)")
        .eq("professional_id", professionalId)
        .single();
    // TODO: Add error handling
    if (!data || error) {
        throw new Error("Failed to fetch professional");
    }

    return (
        <>
            <Navbar />
            <main>
                <div className='flex flex-col lg:flex lg:flex-row gap-5 px-5 md:px-5 xl:px-16 py-5 lg:min-h-[900px]'>
                    {/* for xl screens */}
                    <div className='lg:w-[70%] flex flex-col gap-5 w-full max-lg:hidden'>
                        <DetailsSection data={data} />
                        <ReviewSection />
                    </div>

                    <div className='max-lg:hidden w-[30%]'>
                        <BookingSection />
                    </div>

                    {/* for md screens */}
                    <div className='lg:w-[70%] flex flex-col gap-5 w-full max-md:hidden lg:hidden'>
                        <DetailsSection data={data} />
                        <div className='flex gap-3'>
                            <div>
                                <BookingSection />
                            </div>
                            <div>
                                <ReviewSection />
                            </div>
                        </div>
                    </div>

                    {/* for mobile screens */}
                    <div className='md:w-[70%] flex flex-col gap-5 w-full md:hidden'>
                        <DetailsSection data={data} />
                        <BookingSection />
                    </div>

                    <div className='md:hidden'>
                        <ReviewSection />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
