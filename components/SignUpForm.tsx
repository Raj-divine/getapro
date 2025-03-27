'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import signUpAction from '@/app/actions/auth/signUpAction';
import { APP_ERRORS } from '@/config';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/use-auth';

const formSchema = z
  .object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export default function SignUpForm({ type, setIsModalOpen }: { type: 'customer' | 'professional', setIsModalOpen?: (isOpen: boolean) => void }) {
  const { setUser } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function handleSignUp(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading('Signing up...');
    const { error, data, appError } = await signUpAction({ ...values, type });
    toast.dismiss(toastId);

    if (appError) {
      toast.error(APP_ERRORS[appError]);
    } else if (error) {
      toast.error(error.message);
    } else if (!data?.user || !data.session) {
      toast.error('Something went wrong. Please try again later.');
    } else {
      setUser(data.user);
      toast.success('Sign up successful!');
      if (setIsModalOpen) setIsModalOpen(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignUp)} className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid lg:grid-cols-2 lg:gap-4 md:flex md:flex-col'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-foreground'>
                  First Name
                </FormLabel>
                <FormControl>
                  <Input placeholder='John' {...field} />
                </FormControl>
                <FormMessage className='font-normal' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-foreground'>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='Doe' {...field} />
                </FormControl>
                <FormMessage className='font-normal' />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-foreground'>Email</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='john.doe@example.com'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-normal' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-foreground'>Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter your password'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-normal' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-foreground'>
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Confirm your password'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-normal' />
            </FormItem>
          )}
        />

        <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
          <span className='relative z-10 bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>

        <div className='w-full flex justify-between gap-3 lg:flex lg:flex-row lg:justify-between md:flex-col md:items-center max-xs:flex-col max-xs:items-center  '>
          <Button
            className='flex items-center w-1/2 lg:w-1/2 md:w-full max-xs:w-full'
            variant='outline'
          >
            <div className='h-full flex items-center'>
              <svg
                className='mr-2'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='100%'
                height='100%'
                viewBox='0 0 48 48'
              >
                <path
                  fill='#FFC107'
                  d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                ></path>
                <path
                  fill='#FF3D00'
                  d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                ></path>
                <path
                  fill='#4CAF50'
                  d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                ></path>
                <path
                  fill='#1976D2'
                  d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                ></path>
              </svg>
              Signup with Google
            </div>
          </Button>
          <Button
            className='flex items-center w-1/2 lg:w-1/2 md:w-full max-xs:w-full'
            variant='outline'
          >
            <div className='h-full flex items-center'>
              <svg
                className='mr-2'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='100%'
                height='100%'
                viewBox='0 0 48 48'
              >
                <path
                  fill='#0288D1'
                  d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'
                ></path>
                <path
                  fill='#FFF'
                  d='M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z'
                ></path>
              </svg>
              Signup with LinkedIn
            </div>
          </Button>
        </div>

        <Button type='submit' disabled={form.formState.isSubmitting} className='w-full'>
          Create Account
        </Button>
      </form>
    </Form>
  );
}
