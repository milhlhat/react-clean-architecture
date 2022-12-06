import { toastError } from "./toastUtil";

export const abortError = (error: unknown, defaultMessages = "Unknown error") => {
    if (error instanceof Error) {
        return new Error(error.message);
    } else {
        return new Error(defaultMessages);
    }
}

export const notifyError = (error: unknown, defaultMessages = "Unknown error") => {
    if (error instanceof Error) {
        toastError(error.message);
    } else {
        toastError(defaultMessages);
    }
}