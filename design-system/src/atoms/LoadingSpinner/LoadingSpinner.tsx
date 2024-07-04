import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { clsx } from 'clsx';

type ColorVariant = 'default' | 'primary' | 'accent' | 'white' | 'current';

export const colorVariants: Record<ColorVariant, string> = {
    default: 'border-grey-700',
    primary: 'border-primary-700',
    accent: 'border-accent-500',
    white: 'border-utility-white',
    current: 'border-current',
};

type SizeVariant = 'small' | 'standard';

export const sizeVariants: Record<SizeVariant, string> = {
    small: 'w-6 h-6',
    standard: 'w-10 h-10',
};

type LoadingSpinnerProps = ComponentPropsWithoutRef<'div'> & {
    color?: ColorVariant;
    size?: SizeVariant;
};

const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
    ({ color = 'default', size = 'standard', className = null }, ref) => {
        const defaultClassName =
            'animate-spin rounded-full border-4 border-solid border-primary-900 border-b-transparent';

        const classNames = clsx(
            defaultClassName,
            colorVariants[color],
            sizeVariants[size],
            className
        );

        return (
            <div
                role="status"
                aria-busy="true"
                ref={ref}
                className={classNames}
            />
        );
    }
);

export default LoadingSpinner;
