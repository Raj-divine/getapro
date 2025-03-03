import { BellDotIcon, MessageCircleMore, Video } from "lucide-react";

export default function LadyLawyerImage() {
    return <div className="bg-red-500 w-3/5 sm:w-2/5 md:w-3/4 aspect-square rounded-2xl relative bg-[url('/assets/imgs/lady-lawyer.webp')] bg-cover">
        <div className="bg-white lg:text-2xl md:text-xl text-sm -right-10 -top-5 rounded-md absolute px-3 py-1 flex items-center"> <span className="mr-4 text-orange-400"><BellDotIcon /></span> Financial Planners</div>
        <div className="bg-white lg:text-2xl md:text-xl text-sm -left-16 top-24 rounded-md absolute px-3 py-1 flex items-center"> <span className="mr-4 text-orange-400"><MessageCircleMore /></span> Lawyers</div>
        <div className="bg-white lg:text-2xl md:text-xl text-sm left-28 -bottom-5 rounded-md absolute px-3 py-1 flex items-center"> <span className="mr-4 text-orange-400"><Video /></span> Accountants</div>
    </div>;
}