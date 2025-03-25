import AppSidebar from '@/app/(dashboard)/customer-dashboard/components/AppSidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import Header from './components/Header';
import ProfessionalSection from './components/ProfessionalSection';

const lawyersData = [
  {
    professional_id: 1,
    name: 'Sarah Johnson',
    specialties: ['Contracts', 'Tax', 'Litigation'],
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 1000,
    rating: 4.9,
    numOfRating: 24,
  },
  {
    professional_id: 2,
    name: 'Sarah Johnson',
    specialties: ['Contracts', 'Tax', 'Litigation'],
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 1000,
    rating: 4.9,
    numOfRating: 24,
  },
  {
    professional_id: 3,
    name: 'Sarah Johnson',
    specialties: ['Contracts', 'Tax', 'Litigation'],
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 1000,
    rating: 4.9,
    numOfRating: 24,
  },
  {
    professional_id: 4,
    name: 'Sarah Johnson',
    specialties: ['Contracts', 'Tax', 'Litigation'],
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 1000,
    rating: 4.9,
    numOfRating: 24,
  },
  {
    professional_id: 5,
    name: 'Sarah Johnson',
    specialties: ['Contracts', 'Tax', 'Litigation'],
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 1000,
    rating: 4.9,
    numOfRating: 24,
  },
  {
    professional_id: 6,
    name: 'Sarah Johnson',
    specialties: ['Contracts', 'Tax', 'Litigation'],
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 1000,
    rating: 4.9,
    numOfRating: 24,
  },
];

export default async function CustomerDashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='overflow-hidden h-screen'>
        <Header />
        <div className='px-5 overflow-y-auto'>
          {/* Lawyers section */}
          <ProfessionalSection
            title='Lawyers'
            data={lawyersData}
            profession='Lawyer'
          />
          <ProfessionalSection
            title='CA'
            data={lawyersData}
            profession='Charged Accountants'
          />
          <ProfessionalSection
            title='CS'
            data={lawyersData}
            profession='Company Secretaries'
          />
          <ProfessionalSection
            title='CMA'
            data={lawyersData}
            profession='Cost Management Accountants'
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
