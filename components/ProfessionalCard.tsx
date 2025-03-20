import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

interface Props {
    name: string;
    profession: string;
    specialties: string[];
    price: number;
    image: string;
    rating: number;
    numOfRating: number;
}

export default function ProfessionalCard({ name, profession, specialties, image, price, rating, numOfRating }: Props) {
    return <div className="h-full bg-white border cursor-default border-violet-200 rounded">
        <div className="relative w-full aspect-square">
            <Badge className="font-semibold absolute top-3 right-3 z-50">₹{price}/hr</Badge>
            <Image src={image} loading="lazy" className="object-cover" fill alt="Pro" />
        </div>
        <div className="p-3 flex flex-col justify-between ">
            <div className="flex justify-between items-start ">
                <div>
                    <p className="text-xl leading-5">{name}</p>
                    <p className="text-gray-500">{profession}</p>
                </div>
                <div className="flex items-center h-fit text-sm">
                    <Star className="text-primary mr-1" size={16} />
                    <span className="font-heading">

                        {rating}
                    </span>
                    <span className="ml-1 font-heading text-gray-500">({numOfRating})</span>
                </div>
            </div>

            <div className="my-4">
                <p className="mb-1">Specialties:</p>
                <div className="flex">
                    {specialties.map((specialty, index) => <Badge key={index} className="border-primary font-medium mr-2" variant="outline">{specialty}</Badge>)}
                </div>
            </div>
            <Button variant="primary" className="w-full h-9">Book a Session</Button>
        </div>
    </div>;
}
