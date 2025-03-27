import { StarFilledIcon } from '@radix-ui/react-icons';
import ReviewSummary from './ReviewSummary';
import { ScrollArea } from '@/components/ui/scroll-area';
import Review from './Review';

export default function ReviewSection() {
  return (
    <div className='w-full bg-white h-1/2 rounded-lg p-4'>
      {/* TODO: make it dynamic */}
      <p className='text-xl font-medium'>Reviews</p>
      <ScrollArea className='h-[95%]'>
        <div className='mt-3'>
          <div className='flex flex-col sm:flex-row gap-10'>
            <div className='sm:w-1/2 bg-gray-300 rounded-lg flex flex-col items-center justify-center p-4 w-full'>
              <p className='text-3xl font-heading font-bold'>4.5</p>
              <div className='flex gap-5 text-primary mt-2'>
                <StarFilledIcon height={25} width={25} />
                <StarFilledIcon height={25} width={25} />
                <StarFilledIcon height={25} width={25} />
                <StarFilledIcon height={25} width={25} />
                <StarFilledIcon height={25} width={25} />
              </div>
              <p className='mt-2 text-gray-700'>46 Ratings</p>
            </div>
            <div className='w-full sm:w-2/5 flex flex-col justify-between'>
              <ReviewSummary />
            </div>
          </div>
        </div>
        <div className='mt-5 h-1/2 overflow-hidden'>
          <Review
            name='tarun kushwaha'
            rating={1}
            date='2 days ago'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
          />
          <Review
            name='tarun kushwaha'
            rating={1}
            date='2 days ago'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
          />
          <Review
            name='tarun kushwaha'
            rating={4}
            date='2 days ago'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
          />
          {/* <Review name="tarun kushwaha" rating={4} date="2 days ago" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi." />
                <Review name="tarun kushwaha" rating={4} date="2 days ago" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi." />
                <Review name="tarun kushwaha" rating={4} date="2 days ago" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi." />
                <Review name="tarun kushwaha" rating={4} date="2 days ago" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi." />
                <Review name="tarun kushwaha" rating={4} date="2 days ago" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi." /> */}
        </div>
      </ScrollArea>
    </div>
  );
}
