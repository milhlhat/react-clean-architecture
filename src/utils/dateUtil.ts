export const getCurrentDayString = (): string => {
    return new Date().toISOString().slice(0, 10);
}