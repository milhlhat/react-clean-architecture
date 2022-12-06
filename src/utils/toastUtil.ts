import { ReactNode } from "react";
import { toast, ToastOptions } from "react-toastify";
const defaultToastOptions: ToastOptions = {
     hideProgressBar: true
}
export const toastSuccess = (content: ReactNode, options?: ToastOptions) => {
    toast(content, { ...defaultToastOptions, ...options, type: "success" });
}
export const toastError = (content: ReactNode, options?: ToastOptions) => {
    toast(content, { ...defaultToastOptions, ...options, type: "error" });
}
export const toastWarning = (content: ReactNode, options?: ToastOptions) => {
    toast(content, { ...defaultToastOptions, ...options, type: "warning" });
}
export const toastInfo = (content: ReactNode, options?: ToastOptions) => {
    toast(content, { ...defaultToastOptions, ...options, type: "info" });
}
export const toastDefault = (content: ReactNode, options?: ToastOptions) => {
    toast(content, { ...defaultToastOptions, ...options, type: "default" });
}