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
import { useAuth } from '@/hooks/use-auth';
import { CalendarDays, LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default function UserProfileAvatar() {
    const { user } = useAuth();

    return <DropdownMenu>
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
                    <AvatarFallback>{user?.user_metadata.first_name[0]} {user?.user_metadata.last_name[0] || ''}</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
                <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>{user?.user_metadata.first_name} {user?.user_metadata.last_name || ''}</p>
                    <p className='text-xs leading-none text-muted-foreground'>
                        {user?.user_metadata.email}
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
                <button className='text-red-500 flex items-center'>
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Log out</span>
                </button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>;
}