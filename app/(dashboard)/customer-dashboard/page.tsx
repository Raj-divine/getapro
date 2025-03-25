import AppSidebar from "@/app/(dashboard)/customer-dashboard/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "./components/Header";
import ProfessionalSection from "./components/ProfessionalSection";
import { createClient } from "@/utils/supabase/server";

export default async function CustomerDashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('professionals')
    .select(`
        hourly_rate,
        specialities, 
        category,
        rating,
        rating_count,
        professional_id,
        profile_picture,
        public_user_names(first_name, last_name)
    `).limit(10);

  return (
    <>
      <SidebarProvider >
        <AppSidebar />
        <SidebarInset className="overflow-hidden h-screen">
          <Header />
          <div className="px-5 overflow-y-auto">
            {!error && <>
              <ProfessionalSection title="Lawyers" data={data.filter(professional => professional.category === 'LAWYER')} />
              <ProfessionalSection title="Charted Accountants" data={data.filter(professional => professional.category === 'CHARTED ACCOUNTANT')} />
              <ProfessionalSection title="Company Secretaries" data={data.filter(professional => professional.category === 'COMPANY SECRETARY')} />
              <ProfessionalSection title="Cost Management Accountants" data={data.filter(professional => professional.category === 'COST MANAGEMENT ACCOUNTANT')} />
            </>}
          </div>

        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
