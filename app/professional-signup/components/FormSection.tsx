import Image from 'next/image';
import SignUpForm from '../../../components/SignUpForm';

export default function FormSection() {
  return (
    <section className='bg-violet-100 px-3 sm:px-10 md:px-5 xl:px-16 py-4'>
      <div className='flex flex-col items-center md:flex md:flex-row md:justify-between md:items-center min-h-[640px] relative '>
        <div className='w-full lg:w-1/2 text-center md:text-start z-20 md:pr-3'>
          <h1 className='font-heading text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            Grow your <span className='text-primary'>Practice</span>, Maximize
            your <span className='text-primary'>Earnings</span>
          </h1>
          <p className='text-base sm:text-lg md:text-base lg:text-xl text-gray-500 lg:w-4/5 mt-5 text-center md:text-start'>
            Join <span className='text-primary'>GetAPro</span> and connect with
            clients seeking your expertise. Set your own rates, manage your
            schedule, and boost your income with our trusted platform.
          </p>
          <div className='xl:flex xl:flex-row xl:items-center items-center mt-5 flex flex-col md:flex md:flex-col md:items-start  '>
            <div className='flex -space-x-2'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='h-10 w-10 rounded-full border-2 border-background overflow-hidden relative'
                >
                  <Image
                    src={`/assets/imgs/avatar-${i}.webp`}
                    alt='Professional'
                    fill
                  />
                </div>
              ))}
            </div>
            <p className='text-muted-foreground xl:ml-5 xl:mt-0 mt-2 md:ml-0 '>
              Join the brightest minds in the industry
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 max-md:justify-center flex md:justify-end z-20 pt-10'>
          <SignUpForm type='professional' />
        </div>
        <div
          className='rounded-full w-60 aspect-square absolute bg-violet-400 z-10 opacity-20 top-10 -left-10 '
          aria-hidden
        ></div>
        <div
          className='rounded-full w-28 aspect-square absolute bg-violet-400 z-10 opacity-20 bottom-10 left-48'
          aria-hidden
        ></div>
        <div
          className='rounded-full w-48 aspect-square absolute bg-violet-400 z-10 opacity-20 top-0 -right-14 max-lg:right-0 max-xl:right-0 max-md:w-32 max-md:h-32 '
          aria-hidden
        ></div>
      </div>
    </section>
  );
}
