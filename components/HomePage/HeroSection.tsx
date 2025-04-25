import OnBoardingButtons from './OnBoardingButtons';

export default function HeroSection() {

  return (
    <section className='flex justify-center pt-5 xs:px-2 md:px-0'>
      <div className='flex flex-col items-center w-full text-center lg:px-10'>
        <div className='w-full xl:px-52 lg:px-20 md:px-20'>
          <h1 className='font-heading lg:text-8xl max-sm:text-5xl xs:text-4xl sm:text-6xl font-bold leading-tight md:text-6xl'>
            Connecting you with <span className='text-primary'>Wisdom</span>
          </h1>
        </div>
        <div className='w-full lg:px-40 xl:px-72 md:px-20 px-2'>
          <h2 className='text-sm sm:text-lg lg:text-2xl mt-3 md:mt-5 text-slate-800'>
            Book instant 1-on-1 video consultations with verified legal and
            financial professionals. No hassle, no uncertainty—just meaningful
            connections.
          </h2>
        </div>
        <OnBoardingButtons />
      </div>
    </section>
  );
}
