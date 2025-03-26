import { setHours, setMinutes } from "date-fns";

export default function processSelectedTimes(times: string[], selectedDate: Date) {
    // Sort times chronologically
    const sortedTimes = [...times].sort((a, b) => {
        const [aStart] = a.split("-");
        const [bStart] = b.split("-");

        const [aHours, aMinutes] = aStart.split(":").map(Number);
        const [bHours, bMinutes] = bStart.split(":").map(Number);

        const aInMinutes = aHours * 60 + aMinutes;
        const bInMinutes = bHours * 60 + bMinutes;

        return aInMinutes - bInMinutes;
    });

    const processedSessions: { startTime: Date; duration: number }[] = [];
    let currentSession: { startTime: Date; duration: number } | null = null;

    sortedTimes.forEach((timeSlot) => {
        const [startTime, endTime] = timeSlot.split("-");
        const [startHours, startMinutes] = startTime.split(":").map(Number);
        const [endHours, endMinutes] = endTime.split(":").map(Number);

        const slotStartDate = setHours(setMinutes(new Date(selectedDate), startMinutes), startHours);
        // const slotEndDate = setHours(setMinutes(new Date(selectedDate), endMinutes), endHours);

        if (!currentSession) {
            currentSession = {
                startTime: slotStartDate,
                duration: (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes)
            };
        } else {
            // Calculate gap between current slot and previous session end
            const previousEndTime = new Date(currentSession.startTime.getTime() + currentSession.duration * 60000);
            const timeDiffMinutes = (slotStartDate.getTime() - previousEndTime.getTime()) / 60000;

            if (timeDiffMinutes <= 5) {
                // Extend current session duration by calculating new duration from start of current session to end of this slot
                const newEndTimeInMinutes = endHours * 60 + endMinutes;
                const startTimeInMinutes = currentSession.startTime.getHours() * 60 + currentSession.startTime.getMinutes();
                currentSession.duration = newEndTimeInMinutes - startTimeInMinutes;
            } else {
                // Gap is too large, create new session
                processedSessions.push(currentSession);
                currentSession = {
                    startTime: slotStartDate,
                    duration: (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes)
                };
            }
        }
    });

    // Don't forget to add the last session
    if (currentSession) {
        processedSessions.push(currentSession);
    }

    return processedSessions;
}