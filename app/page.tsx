import EmailPhoneInput from '@/components/home/EmailPhoneInput';
import LadyLawyerImage from '@/components/home/LadyLawyerImage';

export default function Home() {
  return (
    <>
      <main className='h-screen bg-[#f1f1f1]'>
        <div className='flex justify-between h-full'>
          <div className="w-full md:w-[55%] max-md:px-8 pl-8 sm:pl-16 max-sm:pt-[40%] max-md:pt-[20%] md:mt-64 lg:mt-56 xl:mt-44 max-md:bg-[url('/assets/svgs/home-page-abstract.svg')] bg-[240px_54%] min-[430px]:bg-[240px_54%] bg-no-repeat">
            <h1 className='font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl '>
              Connecting you with{' '}
              <span className='italic text-primary-accent'>Wisdom</span>
            </h1>
            <h2 className='text-md md:text-xl lg:text-2xl xl:text-3xl my-5 w-4/5'>
              Get connected with the best minds in legal and financial fields.
            </h2>
            <EmailPhoneInput />
            <div className='mt-10 flex justify-center md:hidden'>
              <LadyLawyerImage />
            </div>
          </div>
          <div className="bg-[url('/assets/svgs/home-page-abstract.svg')] h-full hidden w-[45%] bg-[0_64%] md:flex items-center justify-center">
            <LadyLawyerImage />
          </div>
        </div>
      </main>
    </>
  );
}
