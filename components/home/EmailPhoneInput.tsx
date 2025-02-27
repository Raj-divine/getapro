'use client';

import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { toast } from 'sonner';
import { createClient } from "@/utils/supabase/client";
import isContactValid from "@/utils/isContactValid";

export default function EmailPhoneInput() {
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(false);
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [isProfessional, setIsProfessional] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!emailOrPhone.trim()) return toast.error('Please enter your email or phone number');

        if (!isContactValid(emailOrPhone)) return toast.error('Please enter a valid email or phone number');

        const toastId = toast.loading('Signing you up...');
        setIsLoading(true);

        const { error } = await supabase.from('early_signups').insert({ contact: emailOrPhone, isProfessional });
        setIsLoading(false);

        toast.dismiss(toastId);

        if (error && error.code === "23505") {
            return toast.error('This email or phone number is already registered.');
        }

        toast.success('Thank you for your interest. We will reach out to you soon.');
        setEmailOrPhone('');
    };

    return <>
        <div className="flex">
            <form onSubmit={handleSubmit} className="flex w-full">
                <Input id="emailOrPhone" onChange={(e) => setEmailOrPhone(e.target.value)} placeholder="Please enter you email or phone number to get early access" className="border-none w-3/5 rounded-r-none" type="text" />
                <Button disabled={isLoading} variant="primary" className="rounded-l-none">Get In Early</Button>
            </form>
        </div>

        <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="isPro" checked={isProfessional} onCheckedChange={(value) => setIsProfessional(!!value)} />
            <label
                htmlFor="isPro"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                I'm a professional
            </label>
        </div>
    </>;
}