'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
const professionalCategories = [
    {
        value: 'lawyers',
        label: 'Lawyers'
    },
    {
        value: 'charted-accountants',
        label: 'Chartered Accountant (CA)'
    },
    {
        value: 'company-secretary',
        label: 'Company Secretary (CS)'
    },
    {
        value: 'certified-management-accountants',
        label: 'Certified Management Accountants (CMA)'
    },
    {
        value: 'certified-financial-analysts',
        label: 'Chartered Financial Analysts (CFA)'
    },
    {
        value: 'other',
        label: 'Other'
    },
];

const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    category: z.string().min(1, "Please select a category"),
    otherCategory: z.string().min(2, "Category must be at least 2 characters").optional(),
}).refine((data) => {
    if (data.category === 'other') {
        return !!data.otherCategory;
    }
    return true;
}, {
    message: "Please specify your professional category",
    path: ["otherCategory"],
});

export default function SignUpForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            category: "",
            otherCategory: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // TODO: Handle form submission
        console.log(values);
    }

    return (
        <Card className="shadow-lg w-full max-w-lg">
            <CardHeader>
                <CardTitle className="font-heading">Sign up as a Professional</CardTitle>
                <CardDescription>Fill out the form below to start your journey with GetAPro</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" {...field} />
                                        </FormControl>
                                        <FormMessage className="font-normal" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} />
                                        </FormControl>
                                        <FormMessage className="font-normal" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-foreground">Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage className="font-normal" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-foreground">Professional Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your profession" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {professionalCategories.map(item => (
                                                <SelectItem key={item.value} value={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="font-normal" />
                                </FormItem>
                            )}
                        />

                        {form.watch("category") === "other" && (
                            <FormField
                                control={form.control}
                                name="otherCategory"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">Please enter your professional category</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your category" {...field} />
                                        </FormControl>
                                        <FormMessage className="font-normal" />
                                    </FormItem>
                                )}
                            />
                        )}

                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}