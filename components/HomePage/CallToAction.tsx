import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export default function CallToActionSection() {

    return <section className="px-16 py-20 flex flex-col justify-center items-center">
        <h2 className="font-heading text-5xl font-bold">Ready to connect with a professional?</h2>
        <p className="text-xl text-gray-500">Join the many users who have found the right expert for their needs.</p>
        <div>
            <div className='flex mt-8'>
                <Button variant='primary' className='max-sm:mr-3 max-sm:h-9 sm:mr-2'>
                    Find a Professional <ArrowRightIcon className='ml-1 ' />
                </Button>
                <Button variant='secondary' className='max-sm:h-9'>
                    Join as Professional
                </Button>
            </div>
        </div>
    </section>;
}
