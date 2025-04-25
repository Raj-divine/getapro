export default function getSessionRate(ratePerHour: number, duration: number) {
    return ((ratePerHour / 60) * duration).toFixed(2);
}