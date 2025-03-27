import { Progress } from '@/components/ui/progress';

function ReviewBar() {
  return (
    <div className='flex items-center gap-2 mb-2'>
      <span className='w-8 text-sm'>5.0</span>
      <Progress value={60} className='w-[60%] h-2' />
      <p className='text-sm text-right ml-2'>
        <span className='font-heading text-xs'>50</span>Reviews
      </p>
    </div>
  );
}

export default function ReviewSummary() {
  return (
    <>
      <ReviewBar />
      <ReviewBar />
      <ReviewBar />
      <ReviewBar />
      <ReviewBar />
    </>
  );
}
