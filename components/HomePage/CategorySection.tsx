import { Scale } from "lucide-react";
import { ReactNode } from "react";

interface CategoryCardProps {
    title: string;
    numberOfProfessionals: number;
    children: ReactNode;
}
function CategoryCard({ title, numberOfProfessionals, children }: CategoryCardProps) {
    return <div className="border border-violet-200 bg-white rounded flex flex-col items-center justify-center aspect-square h-40 cursor-pointer transition-transform hover:-translate-y-2">
        <div>
            {children}
        </div>
        <p className="font-medium text-lg">{title}</p>
        <p className="text-gray-500">{numberOfProfessionals} Professionals</p>
    </div >;
}

export default function CategorySection() {

    const categoryData = [
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        },
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        },
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        },
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        },
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        },
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        },
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        },
        {
            title: "Corporate Law",
            numberOfProfessionals: 10,
            icon: <Scale />
        }
    ];

    return <section className="bg-violet-100 px-16 py-20">
        <h3 className="font-heading text-3xl font-bold">Browse by category</h3>
        <div className="flex justify-between mt-10">
            {categoryData.map((category, index) => <CategoryCard key={index} title={category.title} numberOfProfessionals={category.numberOfProfessionals} >{category.icon}</CategoryCard>)}
        </div>
    </section>;
}
