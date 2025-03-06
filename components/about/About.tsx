import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line arrow-body-style
const About = () => {
  return (
    <div className=' max-md:h-[80vh] w-full'>
      <div className='w-full  h-[80vh] flex flex-col items-center'>
        <div className='w-[90%]  h-[50%] md:w-[70%] bg-red-500 lg:w-[40%] mt-36 rounded-lg relative'>
          <Image
            src={'/assets/imgs/getapro-logo.png'}
            alt={'Get a pro logo'}
            fill
            className='object-contain rounded-lg'
          />
        </div>
        <div className='text-center mt-4 '>
          {/* <h1 className='text-7xl font-bold '>Get A Pro</h1>     */}
          <p className='pt-2 md:text-lg px-5 md:px-20 '>
            A platform where you find everyone you need to get the best
            professionals for your legal and financial needs
          </p>
        </div>
      </div>
      <div className=' w-full h-[50vh] flex pt-10  bg-[#fd875b] '>
        <h1 className='md:text-8xl  text-6xl font-bold '>Problem</h1>
        <p className='md:px-24 pl-20 text-right'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          temporibus tempore laboriosam eveniet omnis enim velit qui. Animi,
          deserunt eligendi. Mollitia dolorum voluptatem, consequuntur magnam
          laborum quisquam rem doloremque eos. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cupiditate quaerat deleniti aspernatur
          eum nisi aperiam? Molestias quia, magni blanditiis minus rerum
          perferendis error hic optio ex aliquid, maiores, libero ullam?
        </p>
      </div>
      <div className=' w-full h-[50vh] flex flex-row-reverse pt-10  bg-[#dfdfdf] '>
        <h1 className='md:text-8xl  text-6xl font-bold '>Solution</h1>
        <p className='md:px-24 pr-20 text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          temporibus tempore laboriosam eveniet omnis enim velit qui. Animi,
          deserunt eligendi. Mollitia dolorum voluptatem, consequuntur magnam
          laborum quisquam rem doloremque eos. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cupiditate quaerat deleniti aspernatur
          eum nisi aperiam? Molestias quia, magni blanditiis minus rerum
          perferendis error hic optio ex aliquid, maiores, libero ullam?
        </p>
      </div>
    </div>
  );
};

export default About;
