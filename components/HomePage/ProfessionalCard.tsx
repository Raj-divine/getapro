import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface Props {
    name: string;
    profession: string;
    specialties: string[];
    price: number;
    image: string;
}

export default function ProfessionalCard({ name, profession, specialties, image, price }: Props) {
    return <div className="h-full bg-white border cursor-default border-violet-200 rounded overflow-hidden">
        <div className="relative w-full h-[45%]">
            <Image src={image} loading="lazy" className="object-cover" fill alt="Pro" />
        </div>
        <div className="p-3 flex flex-col justify-between h-[55%]">
            <div className="flex justify-between">
                <div>
                    <p className="text-lg leading-5">{name}</p>
                    <p className="text-gray-500 text-sm">{profession}</p>
                </div>
                <div>

                    <Badge className="font-semibold">₹{price}/hr</Badge>
                </div>
            </div>

            <div>
                <p className="mb-1">Specialties:</p>
                <div className="flex">
                    {specialties.map((specialty, index) => <Badge key={index} className="border-primary font-medium mr-2" variant="outline">{specialty}</Badge>)}
                </div>
            </div>
            <Button variant="primary" className="w-full h-9">Book a Session</Button>
        </div>
    </div>;
}
