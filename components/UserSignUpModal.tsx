'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ReactNode, useState } from 'react';
import SignUpForm from './SignUpForm';

export default function UserSignUpModal({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='font-heading'>Sign Up</DialogTitle>
                <DialogDescription>Fill out the form below to connect with wisdom.</DialogDescription>
            </DialogHeader>
            <SignUpForm setIsModalOpen={setIsOpen} type='customer' />
        </DialogContent>
    </Dialog>;
}