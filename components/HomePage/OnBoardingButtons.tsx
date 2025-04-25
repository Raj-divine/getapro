import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function OnBoardingButtons() {
    return <div className='flex mt-8'>
        <Button variant='primary' className='max-sm:mr-3 max-sm:h-9 sm:mr-2' asChild>
            <Link href="/customer-dashboard">
                Find a Professional <ArrowRightIcon className='ml-1 ' />
            </Link>
        </Button>

        <Button variant='secondary' className='max-sm:h-9' asChild>
            <Link href="/professional-signup">
                Join as Professional
            </Link>
        </Button>
    </div>;
}