import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function SearchBar({ className }: { className?: string }) {
    return <Button variant="secondary" className={`sm:pl-2 pr-12 sm:pr-20 font-medium rounded ${className}`}><MagnifyingGlassIcon className='text-primary mr-2' height={20} width={20} />
        <span className='hidden md:block'>Search for a professional or describe your needs...</span>
        <span className='hidden xs:block md:hidden'>Search for a professional</span>
        <span className='xs:hidden'>Search...</span>
    </Button>;
}