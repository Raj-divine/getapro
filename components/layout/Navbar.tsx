'use client';
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/assets/imgs/logo.webp';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";
import isContactValid from "@/utils/isContactValid";

export default function Navbar() {
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

    return <nav className="flex justify-between items-center fixed z-10 w-screen px-16 pt-2">
        <div>
            <Image width={100} height={79} alt="Logo" priority src={logo} />
        </div>
        <div>
            <Link className="hover:underline" href="#">About</Link>
            <Dialog>
                <DialogTrigger asChild><Button className="px-8 h-9 ml-32" variant="primary">Get In Early</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Get in early!</DialogTitle>
                        <DialogDescription>
                            Signup early to get access to best minds in legal and financial fields.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <Label htmlFor="emailOrPhone">Please enter you email or phone number to get early access</Label>
                        <Input id="emailOrPhone" placeholder="Email or Phone Number" type="text" onChange={(e) => setEmailOrPhone(e.target.value)} />
                    </form>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="isProfessional" checked={isProfessional} onCheckedChange={(value) => setIsProfessional(!!value)} />
                        <label
                            htmlFor="isProfessional"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I'm a professional
                        </label>
                    </div>
                    <DialogFooter>
                        <div className="space-x-2">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button disabled={isLoading} variant="primary">Confirm</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    </nav>;
}