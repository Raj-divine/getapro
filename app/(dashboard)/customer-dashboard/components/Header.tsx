import SearchBar from '@/components/SearchBar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, CalendarDays, LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative h-8 w-8 rounded-full'
                >
                  <Avatar>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    />
                    <AvatarFallback>TK</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>John Doe</p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      john.doe@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href='#'>
                      <User className='mr-2 h-4 w-4' />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href='#'>
                      <CalendarDays className='mr-2 h-4 w-4' />
                      <span>My Sessions</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href='#'>
                      <Settings className='mr-2 h-4 w-4' />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className='text-red-500 hover:bg-red-500 hover:text-white flex items-center'>
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Log out</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
