'use server';

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { APP_ERRORS, APP_ERROR_CODES } from "@/config";
import { AuthError, Session, User } from "@supabase/supabase-js";
import { z } from "zod";

interface UserData {
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    type: 'customer' | 'professional'
}

interface Data {
    user: User | null;
    session: Session | null;
}

const UserSchema = z.object({
    firstName: z.string({
        required_error: APP_ERROR_CODES['MISSING_FIELDS']
    }).min(2, {
        message: APP_ERROR_CODES['INVALID_LENGTH']
    }),
    lastName: z.string({
        required_error: APP_ERROR_CODES['MISSING_FIELDS']
    }).min(2, {
        message: APP_ERROR_CODES['INVALID_LENGTH']
    }),
    email: z.string({
        required_error: APP_ERROR_CODES['MISSING_FIELDS']
    }).email({
        message: APP_ERROR_CODES['INVALID_EMAIL']
    }),
    password: z.string({
        required_error: APP_ERROR_CODES['MISSING_FIELDS']
    }).min(6, {
        message: APP_ERROR_CODES['INVALID_LENGTH']
    }),
    confirmPassword: z.string({
        required_error: APP_ERROR_CODES['MISSING_FIELDS']
    }).min(6, {
        message: APP_ERROR_CODES['INVALID_LENGTH']
    }),
    type: z.enum(['customer', 'professional'], {
        required_error: APP_ERROR_CODES['MISSING_FIELDS'],
        invalid_type_error: APP_ERROR_CODES['INVALID_USER_TYPE']
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: APP_ERROR_CODES['PASSWORD_MISMATCH'],
    path: ['confirmPassword'],
});

export default async function signUpAction(userData: UserData): Promise<{ error: AuthError | null, data: Data | null, appError: keyof typeof APP_ERRORS | null }> {
    const supabase = await createClient();
    // type-casting here for convenience
    // in practice, you should validate your inputs

    const result = UserSchema.safeParse(userData);

    if (!result.success) {
        return {
            appError: result.error.errors[0].message as keyof typeof APP_ERRORS,
            error: null,
            data: null
        };
    }

    const data = {
        email: userData.email,
        password: userData.password,
        options: {
            data: {
                first_name: userData.firstName,
                last_name: userData.lastName,
                type: userData.type.toUpperCase()
            }
        }
    };
    const { error, data: user } = await supabase.auth.signUp(data);

    revalidatePath('/', 'layout');
    return { error, data: user, appError: null };
}