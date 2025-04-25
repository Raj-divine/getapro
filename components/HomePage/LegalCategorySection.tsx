'use client';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import ProfessionalCard from '../ProfessionalCard';
import { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Database } from '@/supabase/types/database.types';

interface ProfessionalData {
  hourly_rate: number;
  specialities: string[];
  category: Database['public']['Enums']['Professional Categories'];
  professional_id: string;
  rating: number;
  rating_count: number;
  profile_picture: string | null;
  public_user_names: {
    first_name: string | null;
    last_name: string | null;
  }
};

export default function LegalCategorySection({ data }: { data: ProfessionalData[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className='bg-violet-100 mt-10 py-10 md:px-10'>
      <div className='flex justify-between items-center mb-6 px-5 '>
        {/* TODO: This should be a link that shows all legal professionals */}
        <p className='underline flex items-center font-heading text-4xl font-semibold cursor-pointer '>
          LEGAL <ArrowRightIcon strokeWidth={3} size={33} />
        </p>
        <div className='flex gap-2'>
          {api && (
            <>
              <button
                disabled={current === 1}
                className={`border rounded-full transition-colors p-2 ${current === 1 ? 'border-gray-400' : 'border-primary hover:bg-primary/10'}`}
                onClick={() => api.scrollPrev()}
              >
                <CaretLeftIcon />
              </button>
              <button
                disabled={current === count}
                className={`border rounded-full transition-colors p-2 ${current === count ? 'border-gray-400' : 'border-primary hover:bg-primary/10'}`}
                onClick={() => api.scrollNext()}
              >
                <CaretRightIcon />
              </button>
            </>
          )}
        </div>
      </div>
      <div>
        <Carousel setApi={setApi}>
          <CarouselContent className='px-2'>

            {data.map(professional => (
              <CarouselItem key={professional.professional_id} className='basis-3/5 xl:basis-1/5 lg:basis-1/4 md:basis-2/5'>
                <ProfessionalCard
                  name={`${professional.public_user_names.first_name} ${professional.public_user_names.last_name || ''}`}
                  category={professional.category}
                  specialties={professional.specialities}
                  image={professional.profile_picture || ''}
                  price={professional.hourly_rate}
                  rating={professional.rating}
                  numOfRating={professional.rating_count}
                  professionalId={professional.professional_id}
                />
              </CarouselItem>
            ))}

          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
