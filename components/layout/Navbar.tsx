'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/svgs/logo.svg';
import { useEffect, useState } from 'react';

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
        <nav className={`flex justify-between items-center w-full z-10 px-8 sm:px-16 py-2 transition-colors duration-200 border-b ${isScrolled ? 'bg-white shadow fixed' : ''}`}>
            <div>
                <Link href='/'>
                    <Image width={70} alt='Logo' priority src={logo} />
                </Link>
            </div>
        </nav>
    );
}
