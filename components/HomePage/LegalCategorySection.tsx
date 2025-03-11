'use client';
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import ProfessionalCard from "./ProfessionalCard";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "lucide-react";

export default function LegalCategorySection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return <section className="bg-violet-100 px-16 py-20">
        <div className="flex justify-between items-center mb-6">
            {/* TODO: This should be a link that shows all legal professionals */}
            <p className="underline flex items-center font-heading text-4xl font-semibold cursor-pointer">LEGAL <ArrowRightIcon strokeWidth={3} size={33} /></p>
            <div className="flex gap-2">
                {api && <>
                    <button disabled={current === 1} className={`border rounded-full transition-colors p-2 ${current === 1 ? "border-gray-400" : "border-primary hover:bg-primary/10"}`} onClick={() => api.scrollPrev()}><CaretLeftIcon /></button>
                    <button disabled={current === count} className={`border rounded-full transition-colors p-2 ${current === count ? "border-gray-400" : "border-primary hover:bg-primary/10"}`} onClick={() => api.scrollNext()}><CaretRightIcon /></button>
                </>
                }
            </div>
        </div>
        <div>
            <Carousel setApi={setApi}>
                <CarouselContent className="h-80">
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                    <CarouselItem className="basis-1/5 ">
                        <ProfessionalCard name="Sarah Johnson" profession="Corporate Lawyer" specialties={["Contracts", "Tax", "Litigation"]} image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" price={1000} />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    </section>;
}
