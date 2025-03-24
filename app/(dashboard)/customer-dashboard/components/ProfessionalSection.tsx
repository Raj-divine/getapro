'use client';
import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import ProfessionalCard from "@/components/ProfessionalCard";

interface professionalData {
    professional_id: number;
    name: string;
    specialties: string[];
    image: string;
    price: number;
    rating: number;
    numOfRating: number;
}

interface ProfessionalSectionProps {
    title: string;
    data: professionalData[];
    profession: string;

}

export default function ProfessionalSection({ title, data, profession }: ProfessionalSectionProps) {
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

    return <div className="mt-10">
        <div className='flex justify-between items-center mb-6 px-5'>
            <p className='flex items-center font-heading text-4xl font-semibold'>
                {title}
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
                    {data.map(data => (
                        <CarouselItem key={data.professional_id} className='basis-3/5 xl:basis-1/5 lg:basis-1/4 md:basis-2/5'>
                            <ProfessionalCard
                                name={data.name}
                                profession={profession}
                                specialties={data.specialties}
                                image={data.image}
                                price={data.price}
                                rating={data.rating}
                                numOfRating={data.numOfRating}
                            />
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </div>
    </div>;
}