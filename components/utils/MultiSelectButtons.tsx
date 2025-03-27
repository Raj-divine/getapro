import { Dispatch } from 'react';
import { Button } from '../ui/button';
import { Clock2 } from 'lucide-react';

interface MultiSelectButtonsProps {
  options: { value: string; label: string; booked: boolean }[];
  selected: string[];
  onChange: Dispatch<React.SetStateAction<string[]>>;
}

export default function MultiSelectButtons({
  options,
  selected = [],
  onChange,
}: MultiSelectButtonsProps) {
  const toggleSelection = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <>
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => toggleSelection(option.value)}
          variant={
            selected.includes(option.value) || option.booked
              ? 'primary'
              : 'secondary'
          }
          className='mr-2 mb-2 text-xs sm:w-full  md:w-[8rem] lg:w-[8rem] xl:w-40 md:px-1 md:pr-2 lg:px-1 lg:pr-2 xl:px-0 '
          disabled={option.booked}
        >
          <p className='flex'>
            <Clock2 height={15} /> {option.label}
          </p>
        </Button>
      ))}
    </>
  );
}
