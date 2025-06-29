'use client';

import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { createContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    setUser: (user: User | null) => void;
    setIsLoading: (isLoading: boolean) => void;
    checkUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    setUser: () => { },
    setIsLoading: () => { },
    checkUser: async () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const supabase = createClient();

    const checkUser = async () => {
        try {
            setIsLoading(true);
            // First try to get the session
            const { data: { session }, error: sessionError } = await supabase.auth.getSession();

            if (sessionError) {
                console.error('Session error:', sessionError.message);
                setUser(null);
                return;
            }

            // If we have a session, get the user
            if (session) {
                const { data: { user }, error: userError } = await supabase.auth.getUser();

                if (userError) {
                    console.log('User error:', userError.message);
                    toast.error('Something went wrong, please try again later or contact support. user error code: ' + userError.code);
                    setUser(null);
                    return;
                }

                setUser(user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('Something went wrong, please try again later or contact support');

            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    // Check user on mount
    useEffect(() => {
        checkUser();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            setUser,
            setIsLoading,
            checkUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}