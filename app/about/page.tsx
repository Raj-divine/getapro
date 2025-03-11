import Image from "next/image";

export default function About() {
    return (
        <>
            <main className='h-screen bg-[#f1f1f1]'>
                <section className="flex flex-col justify-center items-center h-[60vh] bg-primary-accent/5 px-3">
                    <div className="relative w-full h-1/2">
                        <Image src="/assets/imgs/getapro-logo.png" loading="lazy" className="object-contain" fill alt="getapro logo" />
                    </div>
                    <h3 className="text-center text-heading text-xl font-medium ">
                        Get the best professionals for your legal and financial needs
                    </h3>
                </section>
                <section className="flex flex-col justify-between px-3 sm:px-16 py-10 ">
                    <h2 className="text-heading italic text-4xl md:text-5xl lg:text-6xl font-bold underline decoration-primary-accent">What we are.</h2>
                    <div className="mt-10 w-full flex justify-end">
                        <p className="text-right md:text-start md:w-1/2">
                            We are a platform that connects legal and financial professionals with users for 1-on-1 video consultations where users can pay based on the duration of the call and talk about anything they want to discuss.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col justify-between px-3 sm:px-16 py-10 bg-primary-accent/5 ">
                    <h2 className="text-heading italic text-4xl md:text-5xl lg:text-6xl font-bold underline decoration-primary-accent text-right">The problem.</h2>
                    <div className="mt-10">
                        <div className="md:w-2/3">
                            <p>
                                Finding the right legal or financial professional can be a hassle. Whether you're starting a business or need expert advice, searching for a verified professional online or visiting one in person can be time-consuming and frustrating. Even after finding one, there's always a concern about authenticity.
                            </p>
                            <br />
                            <p>
                                <strong className="text-primary-accent italic">GetAPro</strong> eliminates this hassle by providing a single, trusted platform where users can instantly book 1-on-1 video call sessions with verified legal and financial professionals. Every expert on our platform is thoroughly vetted, ensuring users get reliable and secure consultations without the risk of fraud.

                            </p>
                            <br />

                            <p>
                                For professionals, finding clients and optimizing their work hours can be a challenge. Many experts lose valuable time and income due to gaps in their schedules. <strong className="text-primary-accent italic">GetAPro</strong> solves this by allowing professionals to list their availability and set their own rates, helping them connect with clients effortlessly and make the most of their time.
                            </p>
                            <br />

                            <p>
                                With <strong className="text-primary-accent italic">GetAPro</strong>, users get instant access to trusted professionals, and professionals get a seamless way to monetize their expertise. No wasted time, no uncertainty—just meaningful connections.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
