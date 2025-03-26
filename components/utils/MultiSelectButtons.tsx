import { Dispatch } from "react";
import { Button } from "../ui/button";
import { Clock2 } from "lucide-react";

interface MultiSelectButtonsProps {
    options: { value: string; label: string, booked: boolean }[];
    selected: string[];
    onChange: Dispatch<React.SetStateAction<string[]>>;
}

export default function MultiSelectButtons({ options, selected = [], onChange }: MultiSelectButtonsProps) {
    const toggleSelection = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((item) => item !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    return (
        <>
            {
                options.map((option) => (
                    <Button
                        key={option.value}
                        onClick={() => toggleSelection(option.value)}
                        variant={(selected.includes(option.value) || option.booked) ? "primary" : "secondary"}
                        className="mr-2 mb-2 text-xs w-40"
                        disabled={option.booked}
                    >
                        <Clock2 height={15} /> {option.label}
                    </Button>
                ))
            }
        </>
    );
};
