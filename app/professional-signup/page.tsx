import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BenefitSection from "@/components/ProfessionalSignupPage/BenefitSection";
import FAQCardSection from "@/components/ProfessionalSignupPage/FAQCardSection";
import FormSection from "@/components/ProfessionalSignupPage/FormSection";

export default function ProfessionalSignupPage() {
    return (
        <>
            <Navbar />
            <main>
                <FormSection />
                <FAQCardSection />
                <BenefitSection />
            </main>
            <Footer />
        </>
    );
}
