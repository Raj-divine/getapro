import { CalendarDays, Search, Video } from 'lucide-react';
import { ReactNode } from 'react';

interface StepCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

function StepCard({ title, description, children }: StepCardProps) {
  return (
    <div className='flex flex-col items-center justify-center  border cursor-default border-violet-200 transition-transform bg-zinc-200 p-6 lg:w-2/3 md:w-2/5 sm:w-full w-full  rounded hover:-translate-y-2'>
      <div className='text-primary bg-primary/30 p-3 rounded-full'>
        {children}
      </div>
      <strong className='text-lg my-3'>{title}</strong>
      <p className='text-center text-gray-600'>{description}</p>
    </div>
  );
}

export default function PlatformWorkingSection() {
  return (
    <section className='py-24 px-7 xs:px-16 md:px-10 lg:px-10 xl:px-16 flex flex-col items-center '>
      <div className='flex flex-col items-center '>
        <h3 className='font-heading xs:text-4xl text-3xl md:text-5xl font-bold text-center'>
          How Get<span className='text-primary'>A</span>Pro works
        </h3>
        <h4 className='xs:text-xl text-lg text-gray-500 text-center mt-5 '>
          Get expert advice in three simple steps
        </h4>
      </div>
      <div className='flex justify-center gap-7 lg:gap-7 md:gap-10  mt-16 md:w-full sm:w-full w-full flex-col sm:flex-col  md:flex-wrap lg:flex-nowrap md:flex-row'>
        <StepCard
          title='Search'
          description='Browse verified professionals by category, rating and availability based on your needs'
        >
          <Search size={20} />
        </StepCard>
        <StepCard
          title='Book'
          description='Select a time slot and book your consultation with just a few clicks'
        >
          <CalendarDays size={20} />
        </StepCard>
        <StepCard
          title='Connect'
          description='Join your secure video consultation and get the expert advice you need'
        >
          <Video size={20} />
        </StepCard>
      </div>
    </section>
  );
}
