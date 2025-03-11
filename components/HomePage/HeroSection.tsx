import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
    return <section className="flex justify-center py-24 px-16">
        <div className="flex flex-col items-center w-2/3 text-center">
            <h1 className="font-heading text-7xl font-bold leading-tight">Connecting you with <span className="text-primary">Wisdom</span></h1>
            <h2 className="text-xl">Book instant 1-on-1 video consultations with verified legal and financial professionals. No hassle, no uncertainty—just meaningful connections.</h2>
            <div className="flex mt-8">
                <Button variant="primary" className="mr-2">Find a Professional <ArrowRightIcon className="ml-1" /> </Button>
                <Button variant="secondary">Join as Professional</Button>
            </div>
        </div>
    </section>;
}
