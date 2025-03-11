'use client';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/svgs/logo.svg';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between items-center fixed z-10 w-screen px-8 sm:px-16 pt-2 transition-colors duration-200 ${isScrolled ? 'bg-white shadow' : ''}`}>
      <div>
        <Link href='/'>
          <Image width={70} alt='Logo' priority src={logo} />
        </Link>
      </div>
      <div className='flex justify-end items-center'>
        <Link
          className='hover:underline'
          href={pathname === '/' ? '/about' : '/'}
        >
          {pathname === '/' ? 'About' : 'Home'}
        </Link>
        <Button asChild className='sm:px-8 h-9 ml-4 sm:ml-32' variant='primary'>
          <a href="mailto:tarunkush0510@gmail.com">Contact Us</a>
        </Button>
      </div>
    </nav>
  );
}
