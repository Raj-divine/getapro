'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Dispatch, SetStateAction } from 'react';
import SignUpForm from './SignUpForm';

export default function UserSignUpModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) {

    return <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='font-heading'>Sign Up</DialogTitle>
                <DialogDescription>Fill out the form below to connect with wisdom.</DialogDescription>
            </DialogHeader>
            <SignUpForm setIsModalOpen={setIsOpen} type='customer' />
        </DialogContent>
    </Dialog>;
}