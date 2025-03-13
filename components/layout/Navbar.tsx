'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/svgs/logo.svg';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`flex justify-between items-center w-full z-50 px-8 sm:px-16 py-2 transition-colors duration-200 border-b ${isScrolled ? 'bg-white shadow-sm fixed' : ''}`}>
            <div className='w-1/5'>
                <Link href='/'>
                    <Image width={70} alt='Logo' priority src={logo} />
                </Link>
            </div>
            <div>
                {/* TODO: when this button is clicked open a search modal */}
                <Button variant="secondary" className='pl-2 pr-20 font-medium rounded'><MagnifyingGlassIcon className='text-primary mr-2' height={20} width={20} /> Search for a professional or describe your needs...</Button>
            </div>
            <div className='w-1/5 flex justify-end'>
                <Button variant="secondary" className='h-9 mr-2'>Login</Button>
                <Button className='h-9'>Sign up</Button>
            </div>
        </nav>
    );
}
