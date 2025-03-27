import Image from 'next/image';
import Info from './Info';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Database } from '@/supabase/types/database.types';
import uppercaseFirstLetter from '@/utils/uppercaseFirstLetter';

interface DetailsSectionProps {
  data: Database['public']['Tables']['professionals']['Row'] & {
    public_user_names: {
      first_name: string | null;
      last_name: string | null;
    };
  };
}

export default function DetailsSection({ data }: DetailsSectionProps) {
  return (
    <div className='w-full bg-white sm:h-1/2 rounded-lg p-4 flex flex-col gap-3'>
      <div className='rounded-md border p-4 flex h-1/2 max-md:hidden'>
        <div className='relative md:h-36 lg:h-full aspect-square'>
          <Image
            src={data.profile_picture}
            loading='lazy'
            className='object-cover'
            alt='Profile picture'
            fill
          />
        </div>
        <div className='ml-3 w-full'>
          <div className='flex justify-between w-full'>
            <div className='flex gap-10'>
              <Info
                title='Full Name'
                info={
                  data.public_user_names.first_name +
                  ' ' +
                  data.public_user_names.last_name
                }
              />
              <Info
                title='Category'
                info={
                  data.category.charAt(0).toUpperCase() +
                  data.category.slice(1).toLowerCase()
                }
              />
              <Info title='Experience' info={data.experience} />
            </div>
            <div>
              {/* TODO: make it dynamic */}
              <Badge
                variant='secondary'
                className='font-normal text-sm bg-primary/10 px-5'
              >
                ₹{data.hourly_rate}/hour
              </Badge>
            </div>
          </div>
          <div className='mt-4'>
            <p>Education</p>
            <p className='text-gray-500 text-sm leading-normal'>
              {data.school}
            </p>
            <p className='text-gray-500 text-sm leading-normal'>
              {data.degree}
            </p>
          </div>
        </div>
      </div>
      {/* for mobile screens */}
      <div className='md:hidden'>
        <div className='rounded-md border p-4 flex flex-col'>
          <div className='flex'>
            <div className='relative aspect-square h-20 xs:h-28'>
              <Image
                src={data.profile_picture}
                loading='lazy'
                className='object-cover'
                alt='Profile picture'
                fill
              />
            </div>
            <div className='ml-3 w-full'>
              <div>
                <div className='flex w-full justify-between'>
                  <p>Education</p>
                  <div>
                    {/* TODO: make it dynamic */}
                    <Badge
                      variant='secondary'
                      className='font-normal text-sm bg-primary/10 px-5'
                    >
                      ₹{data.hourly_rate}/hour
                    </Badge>
                  </div>
                </div>

                <p className='text-gray-500 text-sm leading-normal mt-1'>
                  {data.school}
                </p>
                <p className='text-gray-500 text-sm leading-normal'>
                  {data.degree}
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-10 mt-2'>
            <div className='flex flex-col gap-3'>
              <Info
                title='Full Name'
                info={
                  data.public_user_names.first_name +
                  ' ' +
                  data.public_user_names.last_name
                }
              />
              <Info
                title='Category'
                info={
                  data.category.charAt(0).toUpperCase() +
                  data.category.slice(1).toLowerCase()
                }
              />
            </div>
            <Info title='Experience' info={data.experience} />
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-3 h-1/2'>
        <div className='rounded-md border p-4 flex-1'>
          <p>Bio</p>
          <ScrollArea className='h-4/5'>
            <p className='mt-2 text-gray-500 text-sm'>{data.bio}</p>
          </ScrollArea>
        </div>
        <div className='rounded-md border p-4 flex-1 lg:h-full'>
          <div>
            <p>Specialities</p>
            <div>
              {data.specialities.map((speciality, index) => (
                <Badge key={index} className='font-normal mr-2 mt-2'>
                  {speciality}
                </Badge>
              ))}
            </div>
          </div>
          <div className='mt-4'>
            <p>Languages</p>
            <div className='mt-2'>
              {data.languages.map((language, index) => (
                <Badge key={index} className='font-normal mr-2'>
                  {uppercaseFirstLetter(language)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
