export default function removeSecondsFromDate(date: Date) {
    const dateString = date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false, // Ensures 24-hour format
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });

    const [day, time] = dateString.split(', ');
    const [dayParts, timeParts] = [day.split('/'), time.split(':')];
    const newDate = new Date(
        parseInt(dayParts[2]), // year
        parseInt(dayParts[1]) - 1, // month (0-based)
        parseInt(dayParts[0]), // day
        parseInt(timeParts[0]), // hours
        parseInt(timeParts[1]), // minutes
        0, // seconds
        0 // milliseconds
    );

    return newDate;
}