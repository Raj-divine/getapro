import {
  Calendar,
  ChartColumnIncreasing,
  CircleCheckBig,
  CreditCard,
  Sparkles,
  Video,
} from 'lucide-react';

export default function BenefitSection() {
  return (
    <section className='px-5 py-16 sm:px-10 md:px-10 lg:px-16 md:py-16 border-t md:h-[87rem] lg:h-full '>
      <div className='text-center flex flex-col items-center'>
        <h2 className='font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold'>
          What to expect as a <span className='text-primary'>GetAPro</span>
          professional
        </h2>
        <p className='text-xl sm:text-lg text-gray-500 mt-5 max-w-4xl'>
          Our platform is designed to make your professional life easier and
          more profitable. Here's what you can expect when you join GetAPro.
        </p>
      </div>
      <div className='flex justify-center h-fit md:h-[650px] mt-10'>
        <div className='lg:flex md:gap-5 lg:max-w-6xl lg:w-full'>
          <div className='lg:w-4/6 gap-5 flex flex-col max-md:w-full '>
            <div className="bg-primary/10 bg-[url('/assets/svgs/money-saving.svg')] bg-[65%_125%] xs:bg-[70%_150%] md:bg-[20rem_20%] min-[870px]:bg-[30rem_20%] lg:bg-[17rem_20%] min-[1190px]:bg-[18rem_20%] min-[1192px]:bg-[20rem_20%] min-[1200px]:bg-[23rem_20%] xl:bg-[166%_14%] bg-no-repeat md:h-[22rem] max-md:pb-[20rem] lg::h-0 lg:pb-0 rounded-xl p-6">
              {/* Top left */}
              <div className='xl:w-3/5 md:w-3/4 flex flex-col justify-between h-full'>
                <div>
                  <div className='text-primary'>
                    <CreditCard size={30} strokeWidth={1.4} />
                  </div>
                  <div className='mt-2'>
                    <h4 className='font-heading font-bold text-2xl'>
                      Maximize your earning potential
                    </h4>
                    <p className='text-gray-700 mt-2 sm:text-lg md:text-lg lg:text-base'>
                      Set your own rates, fill gaps in your schedule, and earn
                      more without the overhead costs of traditional practice.
                      GetAPro helps you monetize your expertise on your terms.
                    </p>
                  </div>
                </div>
                <div className='flex flex-wrap md:mt-auto mt-2 pb-5'>
                  <div className='w-1/2 flex items-center'>
                    <span className='mr-2 text-primary'>
                      <CircleCheckBig size={18} />
                    </span>
                    Flexible Pricing
                  </div>
                  <div className='w-1/2 flex items-center'>
                    <span className='mr-2 text-primary'>
                      <CircleCheckBig size={18} />
                    </span>
                    Instant Deposits
                  </div>
                  <div className='w-1/2 flex items-center'>
                    <span className='mr-2 text-primary'>
                      <CircleCheckBig size={18} />
                    </span>
                    Secure Payments
                  </div>
                  <div className='w-1/2 flex items-center'>
                    <span className='mr-2 text-primary'>
                      <CircleCheckBig size={18} />
                    </span>
                    Easy Payment Integrations
                  </div>
                </div>
              </div>
            </div>
            <div className='md:flex md:flex-row flex flex-col gap-5 w-full lg:flex-1'>
              <div className="lg:w-full md:w-2/5 bg-gray-300 bg-[url('/assets/svgs/digital-marketing-strategy.svg')] bg-[54%_152%] xs:bg-[60%_120%] sm:bg-[58%_120%] md:bg-[11%_146%] lg:bg-[225%_250%] xl:bg-[225%_200%] bg-no-repeat lg:flex-1 rounded-xl max-md:pb-[10rem] p-6">
                {/* bottom left */}
                <div className='text-primary'>
                  <Sparkles size={30} strokeWidth={1.4} />
                </div>
                <div className='mt-2 xl:w-3/5 '>
                  <h4 className='font-heading font-bold text-2xl md:text-xl lg:text-base '>
                    Build your reputation
                  </h4>
                  <p className='text-gray-700 mt-2 sm:text-lg md:text-lg lg:text-base'>
                    Showcase your expertise, collect reviews, and build a strong
                    online presence that attracts more clients.
                  </p>
                </div>
              </div>
              <div className="lg:w-full lg:h-full md:h-[22rem] md:w-3/5 bg-gray-300 bg-[url('/assets/svgs/analytics.svg')] bg-[64%_225%] xs:bg-[62%_268%] sm:bg-[62%_251%] md:bg-[76%_157%] lg:bg-[150%_600%] xl:bg-[150%_0%] bg-no-repeat lg:flex-1 rounded-xl max-md:pb-[10rem] p-6 ">
                {/* Middle bottom */}
                <div className='text-primary'>
                  <ChartColumnIncreasing size={30} strokeWidth={1.4} />
                </div>
                <div className='mt-2 xl:w-3/5 '>
                  <h4 className='font-heading font-bold text-2xl lg:text-base'>
                    Business insight
                  </h4>
                  <p className='text-gray-700 mt-2 sm:text-lg md:text-lg lg:text-base'>
                    Access detailed analytics about your consultations, client
                    satisfaction, and earnings to optimize your practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className='lg:flex-1 lg:h-full md:flex-row flex flex-col lg:flex lg:flex-col gap-5 md:pt-5 lg:pt-0 xl:pt-0'>
            <div className="lg:w-full md:w-3/5 bg-gray-300 bg-[url('/assets/svgs/time-table.svg')] bg-[53%_109%] xs:bg-[55%_100%] sm:bg-[45%_111%] md:bg-[49%_100%] lg:bg-[50%_150%] xl:bg-[107%_70%]  bg-no-repeat lg:flex-1 max-md:grow-0 max-md:pb-[10rem] rounded-xl p-6 mt-5 md:mt-0">
              {/* top right */}
              <div className='text-primary'>
                <Calendar size={30} strokeWidth={1.4} />
              </div>
              <div className='mt-2 xl:w-3/5'>
                <h4 className='font-heading font-bold text-2xl lg:text-base'>
                  Work On Your Schedule
                </h4>
                <p className='text-gray-700 mt-2 sm:text-lg md:text-lg lg:text-base'>
                  Set your own availability and work when it suits you. Fill
                  gaps between appointments and maximize your productive hours.
                </p>
              </div>
            </div>
            <div className="lg:w-full xl:h-full md:h-[22rem] h-full md:w-2/5 bg-primary/10 bg-[url('/assets/svgs/video-call.svg')] bg-[72%_187%] xs:bg-[68%_180%] sm:bg-[56%_202%] md:bg-[24%_1082%] lg:bg-[20%_900%] xl:bg-[40%_150%] bg-(length:50%) bg-no-repeat  max-md:pb-[15rem] rounded-xl p-6 ">
              {/* bottom right */}
              <div className='text-primary'>
                <Video size={30} strokeWidth={1.4} />
              </div>
              <div className='mt-2'>
                <h4 className='font-heading font-bold text-2xl '>
                  1-on-1 video consultations
                </h4>
                <p className='text-gray-700 mt-2 sm:text-lg md:text-lg lg:text-base'>
                  Give personalized guidance and expert advice through direct
                  one-on-one video consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
