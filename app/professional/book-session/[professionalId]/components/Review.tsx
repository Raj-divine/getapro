import uppercaseFirstLetter from "@/utils/uppercaseFirstLetter";
import { StarFilledIcon } from "@radix-ui/react-icons";

interface ReviewProps {
    name: string;
    rating: number;
    date: string;
    content: string;
}

export default function Review({ name, rating, date, content }: ReviewProps) {
    return (
        <div className="border-b rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {name[0].toUpperCase()}
                    </div>
                    <div>
                        <p className="font-medium">{uppercaseFirstLetter(name)}</p>
                        <p className="text-sm text-gray-500">{date}</p>
                    </div>
                </div>
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <StarFilledIcon
                            key={i}
                            className={i < rating ? "text-primary" : "text-primary/20"}
                            height={20}
                            width={20}
                        />
                    ))}
                </div>
            </div>
            <p className="text-gray-600">{content}</p>
        </div>
    );
}