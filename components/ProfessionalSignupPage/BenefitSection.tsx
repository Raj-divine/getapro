import { Calendar, ChartColumnIncreasing, CircleCheckBig, CreditCard, Sparkles, Video } from "lucide-react";

export default function BenefitSection() {

    return <section className="px-16 py-16 border border-t">
        <div className="text-center flex flex-col items-center">
            <h2 className="font-heading text-5xl font-bold">What to expect as a <span className="text-primary">GetAPro</span> professional</h2>
            <p className="text-xl text-gray-500 mt-5 max-w-4xl">Our platform is designed to make your professional life easier and more profitable. Here's what you can expect when you join GetAPro.</p>
        </div>
        <div className="flex justify-center h-[650px] mt-10">
            <div className="flex gap-5 max-w-6xl w-full">
                <div className="w-4/6 gap-5 flex flex-col">
                    <div className="bg-primary/10 bg-[url('/assets/svgs/money-saving.svg')] bg-[166%_14%] bg-no-repeat h-3/5 rounded-xl p-6">
                        {/* Top left */}
                        <div className="w-3/5 flex flex-col justify-between h-full">
                            <div>
                                <div className="text-primary">
                                    <CreditCard size={30} strokeWidth={1.4} />
                                </div>
                                <div className="mt-2">
                                    <h4 className="font-heading font-bold text-2xl">
                                        Maximize your earning potential
                                    </h4>
                                    <p className="text-gray-700 mt-2">Set your own rates, fill gaps in your schedule, and earn more without the overhead costs of traditional practice. GetAPro helps you monetize your expertise on your terms.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-auto">
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-2 text-primary">
                                        <CircleCheckBig size={18} />
                                    </span>
                                    Flexible Pricing
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-2 text-primary">
                                        <CircleCheckBig size={18} />
                                    </span>
                                    Instant Deposits
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-2 text-primary">
                                        <CircleCheckBig size={18} />
                                    </span>
                                    Secure Payments
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-2 text-primary">
                                        <CircleCheckBig size={18} />
                                    </span>
                                    Easy Payment Integrations
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 w-full flex-1">
                        <div className="bg-gray-300 bg-[url('/assets/svgs/digital-marketing-strategy.svg')] bg-[225%_-100%] bg-no-repeat flex-1 rounded-xl p-6">
                            {/* bottom left */}
                            <div className="text-primary">
                                <Sparkles size={30} strokeWidth={1.4} />
                            </div>
                            <div className="mt-2 w-3/5">
                                <h4 className="font-heading font-bold">
                                    Build your reputation
                                </h4>
                                <p className="text-gray-700 mt-2">Showcase your expertise, collect reviews, and build a strong online presence that attracts more clients.</p>
                            </div>
                        </div>
                        <div className="bg-gray-300 bg-[url('/assets/svgs/analytics.svg')] bg-[150%_0%] bg-no-repeat flex-1 rounded-xl p-6">
                            {/* Middle bottom */}
                            <div className="text-primary">
                                <ChartColumnIncreasing size={30} strokeWidth={1.4} />
                            </div>
                            <div className="mt-2 w-3/5">
                                <h4 className="font-heading font-bold">
                                    Business insight
                                </h4>
                                <p className="text-gray-700 mt-2">Access detailed analytics about your consultations, client satisfaction, and earnings to optimize your practice.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex-1 h-full flex flex-col gap-5">
                    <div className="bg-gray-300 bg-[url('/assets/svgs/time-table.svg')] bg-[106%_100%] bg-no-repeat flex-1 rounded-xl p-6">
                        {/* top right */}
                        <div className="text-primary">
                            <Calendar size={30} strokeWidth={1.4} />
                        </div>
                        <div className="mt-2 w-3/5">
                            <h4 className="font-heading font-bold">
                                Work On Your Schedule
                            </h4>
                            <p className="text-gray-700 mt-2">Set your own availability and work when it suits you. Fill gaps between appointments and maximize your productive hours.</p>
                        </div>
                    </div>
                    <div className="bg-primary/10 bg-[url('/assets/svgs/video-call.svg')] bg-[-130%_209%] bg-(length:50%) bg-no-repeat h-2/3 rounded-xl p-6">
                        {/* bottom right */}
                        <div className="text-primary">
                            <Video size={30} strokeWidth={1.4} />
                        </div>
                        <div className="mt-2">
                            <h4 className="font-heading font-bold text-2xl">
                                1-on-1 video consultations
                            </h4>
                            <p className="text-gray-700 mt-2">Give personalized guidance and expert advice through direct one-on-one video consultations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
