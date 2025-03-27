'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/svgs/logo.svg';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import SearchBar from '../SearchBar';
import { LoginForm } from '../LoginForm';
import { useAuth } from '@/hooks/use-auth';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, isLoading } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`flex justify-between items-center w-full z-50 px-7 xs:px-16 md:px-10 lg:px-16 py-2 transition-colors duration-200 border-b ${isScrolled ? 'bg-white shadow-sm fixed top-0' : ''}`}>
                <div className='w-1/5'>
                    <Link href='/'>
                        <Image width={70} alt='Logo' priority src={logo} />
                    </Link>
                </div>
                <div>
                    {/* TODO: when this button is clicked open a search modal */}
                    <SearchBar />
                </div>
                <div className='w-1/5 flex justify-end'>
                    {!isLoading && !user && (
                        <LoginForm>
                            <Button className='mr-2'>Login</Button>
                        </LoginForm>
                    )}
                </div>
            </nav>
            {isScrolled && <div className="h-[81px]" />}
        </>

    );
}
