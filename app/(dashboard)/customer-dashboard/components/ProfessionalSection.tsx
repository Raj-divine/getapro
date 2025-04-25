'use client';
import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import ProfessionalCard from "@/components/ProfessionalCard";
import { Database } from "@/supabase/types/database.types";
import { useSearchParams } from "next/navigation";
import getFilters from "@/utils/getFilters";

interface ProfessionalData {
  hourly_rate: number;
  specialities: string[];
  category: Database['public']['Enums']['Professional Categories'];
  professional_id: string;
  rating: number;
  rating_count: number;
  profile_picture: string | null;
  languages: Database['public']['Enums']['Languages'][];
  public_user_names: {
    first_name: string | null;
    last_name: string | null;
  }
};

interface ProfessionalSectionProps {
  title: string;
  data: ProfessionalData[];
}

interface FilterType {
  minPrice: number;
  maxPrice: number;
  rating: string;
  language: string;
  sort: string;
  availability: string | null;
}

export default function ProfessionalSection({ title, data }: ProfessionalSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<ProfessionalData[]>(data);

  const [filters, setFilters] = useState<FilterType>({
    minPrice: 0,
    maxPrice: 10000,
    rating: 'Any',
    language: 'Any',
    sort: 'rating-desc',
    availability: null,
  });

  useEffect(() => {
    const { minPrice, maxPrice, rating, language, sort, availability } = getFilters(searchParams);
    setFilters({
      minPrice: minPrice ? parseInt(minPrice) : 0,
      maxPrice: maxPrice ? parseInt(maxPrice) : 10000,
      rating: rating || 'Any',
      language: language || 'Any',
      sort: sort || 'rating-desc',
      availability: availability || null,
    });
  }, [searchParams]);

  useEffect(() => {
    let filteredProfessionals = data.filter((professional) => {
      const { hourly_rate, rating, } = professional;
      // TODO: include availability filters
      if (hourly_rate <= filters.minPrice || (filters.maxPrice !== 10000 && filters.maxPrice <= hourly_rate)) {
        return false;
      }

      if (filters.rating !== 'Any' && rating <= Number(filters.rating.replace('+', ''))) {
        return false;
      }

      if (filters.language !== 'Any' && !professional.languages.includes(filters.language.toUpperCase() as Database['public']['Enums']['Languages'])) {
        return false;
      }
      return true;
    });

    // Sort professionals based on selected sort option
    filteredProfessionals = [...filteredProfessionals].sort((a, b) => {
      switch (filters.sort) {
        case 'rating-desc':
          return b.rating - a.rating;
        case 'price-asc':
          return a.hourly_rate - b.hourly_rate;
        case 'price-desc':
          return b.hourly_rate - a.hourly_rate;
        case 'reviews-desc':
          return b.rating_count - a.rating_count;
        default:
          return 0;
      }
    });

    setFilteredData(filteredProfessionals);

  }, [filters]);

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
    <div className='mt-10'>
      <div className='flex justify-between items-center mb-6 px-5'>
        <p className='flex items-center font-heading text-3xl xs:text-4xl font-semibold'>
          <span className='block lg:hidden'>
            {title === 'Lawyers' && 'Lawyers'}
            {title === 'Charted Accountants' && 'CA'}
            {title === 'Company Secretaries' && 'CS'}
            {title === 'Cost Management Accountants' && 'CMA'}
          </span>
          <span className='hidden lg:block'>
            {title}
          </span>
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

        {filteredData.length === 0 && <div className='flex justify-center items-center h-full'>
          <div className='text-center'>
            <p className='text-xl font-medium'>No professionals found</p>
          </div>
        </div>}

        {filteredData.length > 0 && <Carousel setApi={setApi}>
          <CarouselContent className='px-2'>
            {filteredData.map(professional => (
              <CarouselItem key={professional.professional_id} className='basis-3/4 xs:basis-2/3 sm:basis-1/2 xl:basis-1/4 lg:basis-2/5 md:basis-1/2'>
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
        </Carousel>}
      </div>
    </div>
  );
}
