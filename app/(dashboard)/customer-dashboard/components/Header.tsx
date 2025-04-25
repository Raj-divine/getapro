'use client';
import SearchBar from '@/components/SearchBar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import UserProfileAvatar from '@/components/utils/UserProfileAvatar';
import { Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white w-auto z-50'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 h-4' />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className='flex items-center gap-10'>
          <Popover>
            <PopoverTrigger asChild>
              <button className='hover:bg-gray-100 text-primary p-2 rounded-lg transition-colors relative'>
                <Bell />
                {/* should be rendered only when there is a new notification */}
                <div
                  className='bg-red-500 absolute top-1 right-1 h-2 w-2 rounded-full'
                  aria-label='notifications'
                />
              </button>
            </PopoverTrigger>
            <PopoverContent align='end' className='w-80'>
              <div>placeholder</div>
            </PopoverContent>
          </Popover>

          <div className='flex items-center'>
            <UserProfileAvatar />
          </div>
        </div>
      </div>
    </header>
  );
}
