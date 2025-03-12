import { CalendarDays, Search, Video } from "lucide-react";
import { ReactNode } from "react";

interface StepCardProps {
    title: string;
    description: string;
    children: ReactNode;
}

function StepCard({ title, description, children }: StepCardProps) {
    return <div className="flex flex-col items-center justify-center border cursor-default border-violet-200 transition-transform bg-zinc-200 p-6 w-1/3 rounded hover:-translate-y-2">
        <div className="text-primary bg-primary/30 p-3 rounded-full">
            {children}
        </div>
        <strong className="text-lg my-3">{title}</strong>
        <p className="text-center text-gray-600">{description}</p>
    </div>;
}

export default function PlatformWorkingSection() {
    return <section className="py-24 px-16 flex flex-col items-center">
        <div className="flex flex-col items-center">
            <h3 className="font-heading text-5xl font-bold">How Get<span className="text-primary">A</span>Pro works</h3>
            <h4 className="text-xl text-gray-500">Get expert advice in three simple steps</h4>
        </div>
        <div className="flex justify-center gap-7 w-4/5 mt-16">
            <StepCard title="Search" description="Browse verified professionals by category, rating and availability based on your needs">
                <Search size={20} />
            </StepCard>
            <StepCard title="Book" description="Select a time slot and book your consultation with just a few clicks">
                <CalendarDays size={20} />
            </StepCard>
            <StepCard title="Connect" description="Join your secure video consultation and get the expert advice you need">
                <Video size={20} />
            </StepCard>
        </div>
    </section>;
}
