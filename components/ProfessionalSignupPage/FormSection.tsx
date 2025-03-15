import Image from "next/image";
import SignUpForm from "./SignUpForm";

export default function FormSection() {

    return <section className="bg-violet-100 px-16 py-4">
        <div className="flex justify-between items-center min-h-[640px] relative ">
            <div className="w-1/2 z-20">
                <h1 className="font-heading text-5xl font-bold leading-tight">Grow your <span className="text-primary">Practice</span>, Maximize your <span className="text-primary">Earnings</span></h1>
                <p className="text-xl text-gray-500 w-4/5 mt-5">Join <span className="text-primary">GetAPro</span> and connect with clients seeking your expertise. Set your own rates, manage your schedule, and boost your income with our trusted platform.</p>
                <div className="flex items-center mt-5">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden relative">
                                <Image
                                    src={`/assets/imgs/avatar-${i}.webp`}
                                    alt="Professional"
                                    fill
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-muted-foreground ml-5">
                        Join the brightest minds in the industry
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex justify-end z-20">
                <SignUpForm />
            </div>
            <div className="rounded-full w-60 aspect-square absolute bg-violet-400 z-10 opacity-20 top-10 -left-10" aria-hidden></div>
            <div className="rounded-full w-28 aspect-square absolute bg-violet-400 z-10 opacity-20 bottom-10 left-48" aria-hidden></div>
            <div className="rounded-full w-48 aspect-square absolute bg-violet-400 z-10 opacity-20 top-0 -right-14" aria-hidden></div>
        </div>
    </section>;
}
