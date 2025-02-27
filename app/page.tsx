import EmailPhoneInput from "@/components/home/EmailPhoneInput";
import Navbar from "@/components/layout/Navbar";
import { BellDotIcon, MessageCircleMore, Video } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className='h-screen bg-[#f1f1f1]'>
        <Navbar />
        <div className="flex justify-between h-full">
          <div className="w-[55%] pl-16 md:mt-64 lg:mt-56 xl:mt-44">
            <h1 className="font-heading font-semibold md:text-6xl lg:text-7xl xl:text-8xl ">Connecting you with <span className="italic text-primary-accent">Wisdom</span></h1>
            <h2 className="md:text-xl lg:text-2xl xl:text-3xl my-5 w-4/5">Get connected with the best minds in legal and financial fields.</h2>
            <EmailPhoneInput />
          </div>
          <div className="bg-[url('/assets/svgs/home-page-abstract.svg')] h-full w-[45%] bg-[0_64%] flex items-center justify-center">
            <div className="bg-red-500 w-3/4 aspect-square rounded-2xl relative bg-[url('/assets/imgs/lady-lawyer.webp')] bg-cover">
              <div className="bg-white text-2xl -right-10 -top-5 rounded-md absolute px-3 py-1 flex items-center"> <span className="mr-4 text-orange-400"><BellDotIcon /></span> Financial Planners</div>
              <div className="bg-white text-2xl -left-16 top-24 rounded-md absolute px-3 py-1 flex items-center"> <span className="mr-4 text-orange-400"><MessageCircleMore /></span> Lawyers</div>
              <div className="bg-white text-2xl left-28 -bottom-5 rounded-md absolute px-3 py-1 flex items-center"> <span className="mr-4 text-orange-400"><Video /></span> Accountants</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
