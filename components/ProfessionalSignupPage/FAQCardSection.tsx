import {
  CalendarClock,
  Coins,
  Globe,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import { ReactNode } from 'react';

interface FAQCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

function FAQCard({ title, description, children }: FAQCardProps) {
  return (
    <div className='border border-violet-200 p-5 xl:w-[30%] min-h-48 max-md:w-full'>
      <div className='text-primary mb-5'>{children}</div>
      <p className='font-bold font-heading text-lg'>{title}</p>
      <p className='text-gray-500'>{description}</p>
    </div>
  );
}

const FAQCardData = [
  {
    title: 'Flexible scheduling',
    description:
      "Set your own hours and work when it's convenient for you. Fill gaps in your schedule and maximize your productivity.",
    icon: <CalendarClock />,
  },
  {
    title: 'Set Your Own Rates',
    description:
      'You decide how much your expertise is worth. Set competitive rates that reflect your experience and specialization.',
    icon: <Coins />,
  },
  {
    title: 'Expanded Client Base',
    description:
      'Access a global network of potential clients seeking your specific expertise without geographical limitations.',
    icon: <Users />,
  },
  {
    title: 'Verified Platform',
    description:
      "Our thorough vetting process ensures you're part of an exclusive network of trusted professionals.",
    icon: <ShieldCheck />,
  },
  {
    title: 'Remote Consultations',
    description:
      'Conduct video consultations from anywhere, eliminating commute time and office overhead costs.',
    icon: <Globe />,
  },
  {
    title: 'Streamlined Workflow',
    description:
      'Our platform handles bookings, payments, and reminders, letting you focus on what you do best.',
    icon: <Zap />,
  },
];

export default function FAQCardSection() {
  return (
    <section className='px-5 py-16 sm:px-10 md:px-16 md:py-16 flex flex-col items-center'>
      <div className='text-center max-w-6xl'>
        <h2 className='font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold '>
          Why choose <span className='text-primary'>GetAPro</span> for your
          professional practice?
        </h2>
        <p className='text-xl sm:text-lg text-gray-500 mt-5 max-md:text-base'>
          Join thousands of legal and financial professionals who are growing
          their practice and increasing their income with GetAPro.
        </p>
      </div>
      <div className='flex items-center justify-center gap-5 flex-wrap mt-10 max-w-6xl md:grid md:grid-cols-2 md:gap-10 xl:flex xl:items-center xl:justify-center xl:gap-5 xl:flex-wrap xl:max-w-6xl'>
        {FAQCardData.map((card, index) => (
          <FAQCard
            key={index}
            title={card.title}
            description={card.description}
          >
            {card.icon}
          </FAQCard>
        ))}
      </div>
    </section>
  );
}
