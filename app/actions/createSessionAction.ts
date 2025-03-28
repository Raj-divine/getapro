'use server';

import { APP_ERROR_CODES } from "@/config";
import getSessionRate from "@/utils/getSessionRate";
import { createClient } from "@/utils/supabase/server";

export default async function createSessionAction(sessions: { startTime: Date; duration: number }[], professionalId: string) {
    try {
        const supabase = await createClient();
        const { user } = (await supabase.auth.getUser()).data;

        if (!user) {
            return { appError: APP_ERROR_CODES['USER_NOT_LOGGEDIN'], data: null };
        }

        const { data: professionalData, error } = await supabase.from('professionals').select('hourly_rate').eq('professional_id', professionalId).single();
        if (error) {
            return { error, data: null };
        }

        const ratePerHour = professionalData.hourly_rate;

        const dataToInsert = sessions.map((session) => ({
            professional_id: professionalId,
            customer_id: user.id,
            start_time: session.startTime.toISOString(),
            duration: session.duration,
            rate_per_hour: ratePerHour,
            amount: Number(getSessionRate(ratePerHour, session.duration)),
        }));

        const { data, error: createSessionError } = await supabase.from('sessions').insert(dataToInsert).select('session_id');

        if (createSessionError) {
            return { error: createSessionError, data: null };
        }

        return { data, error: null };
    } catch {
        return { appError: APP_ERROR_CODES['INTERNAL_SERVER_ERROR'], data: null };
    }

}