import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge/es5';

export function cn(...args: ClassValue[]): string {
    return twMerge(clsx(args));
}
