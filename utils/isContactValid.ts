export default function isContactValid(contact: string) {
    // Regex for Indian phone number (10 digits, starts with 6, 7, 8, or 9)
    const phoneRegex = /^[6789]\d{9}$/;

    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return phoneRegex.test(contact) || emailRegex.test(contact);
}