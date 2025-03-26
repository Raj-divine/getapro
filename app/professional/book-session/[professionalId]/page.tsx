import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createClient } from "@/utils/supabase/server";
import DetailsSection from "./components/DetailsSection";
import ReviewSection from "./components/ReviewSection";
import BookingSection from "./components/BookingSection";

export default async function BookSessionPage({ params }: { params: { professionalId: string } }) {
    const supabase = await createClient();
    const { data, error } = await supabase.from('professionals').select('*, public_user_names(first_name, last_name)').eq('professional_id', params.professionalId).single();
    // TODO: Add error handling
    if (!data || error) {
        throw new Error('Failed to fetch professional');
    }

    return <>
        <Navbar />
        <main>
            <div className="flex gap-5 px-16 py-5 h-[105vh]">
                <div className="w-[70%] flex flex-col gap-5">
                    <DetailsSection data={data} />
                    <ReviewSection />
                </div>
                <BookingSection />
            </div>
        </main>
        <Footer />
    </>;
}