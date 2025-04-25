import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import BenefitSection from '@/app/professional-signup/components/BenefitSection';
import FAQCardSection from '@/app/professional-signup/components/FAQCardSection';
import FormSection from '@/app/professional-signup/components/FormSection';

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
