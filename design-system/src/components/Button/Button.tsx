import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { twMerge, twJoin } from 'tailwind-merge';
import LoadingSpinner from '../../atoms/LoadingSpinner/LoadingSpinner';

export type ButtonVariant =
    | 'accent'
    | 'primary'
    | 'secondary'
    | 'subtle'
    | 'inverted'
    | 'inverted-secondary'
    | 'grey'
    | 'link'; // not in the Figma design

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    IconLeft?: React.ComponentType<React.ComponentPropsWithRef<'svg'>>;
    IconRight?: React.ComponentType<React.ComponentPropsWithRef<'svg'>>;
    isFullwidth?: boolean;
    busy?: boolean;
};

export const defaultStyle = clsx(
    'nowrap inline-flex cursor-pointer items-center justify-center rounded-lg border-none font-semibold outline-none duration-100 ease-in-out disabled:cursor-not-allowed disabled:border-none disabled:bg-grey-300 disabled:text-grey-400'
);
export const active = clsx('active:scale-98 disabled:active:scale-100');
export const focus = clsx(
    'focus:ring-2 focus:ring-utility-input-focus focus:ring-offset-2'
);

export const sizes: Record<ButtonSize, string> = {
    sm: clsx('h-8 gap-2 px-2 text-sm'),
    md: clsx('h-12 gap-3 px-4 text-md'),
    lg: clsx('h-18 gap-5 px-6 text-lg'),
};

export const variants: Record<ButtonVariant, string> = {
    accent: clsx(
        'bg-accent-500 text-utility-white hover:bg-accent-700 focus:bg-accent-700'
    ),
    primary: clsx(
        'bg-grey-700 text-utility-white hover:bg-grey-900 focus:bg-grey-900'
    ),
    secondary: clsx(
        'border-2 border-solid border-grey-700 text-grey-700 hover:bg-grey-700/5 focus:bg-grey-700/5'
    ),
    subtle: clsx(
        'border border-solid border-grey-300 bg-utility-white text-grey-700 hover:bg-grey-100 focus:bg-grey-100'
    ),
    inverted: clsx(
        'bg-highlight-500 text-grey-700 hover:bg-highlight-700 focus:bg-highlight-700 focus:ring-highlight-500'
    ),
    'inverted-secondary': clsx(
        'border-2 border-solid border-highlight-500 text-utility-white hover:bg-highlight-500/5 focus:bg-highlight-500/5 focus:ring-highlight-500'
    ),
    link: clsx('border-0'),
    grey: clsx('border-0'),
};

const iconVariants: Partial<Record<ButtonVariant, string>> = {
    primary: 'text-highlight-500',
    'inverted-secondary': 'text-highlight-500',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            isFullwidth = false,
            className = null,
            IconLeft,
            IconRight,
            children,
            type = 'button',
            disabled,
            busy = false,
            'aria-disabled': ariaDisabled = false,
            ...rest
        },
        ref
    ) => {
        const classNames = twMerge(
            defaultStyle,
            active,
            focus,
            sizes[size],
            variants[variant],
            isFullwidth && 'w-full',
            busy && 'cursor-wait',
            className
        );
        const iconClassNames = twJoin(
            'h-[1.25em] w-[1.25em]',
            !disabled && iconVariants[variant]
        );

        return (
            <button
                ref={ref}
                className={classNames}
                type={type}
                disabled={disabled}
                aria-disabled={busy || ariaDisabled}
                {...rest}
            >
                {IconLeft && !busy ? (
                    <IconLeft className={iconClassNames} />
                ) : null}
                {busy ? <LoadingSpinner size="small" color="current" /> : null}
                {children}
                {IconRight && !busy ? (
                    <IconRight className={iconClassNames} />
                ) : null}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
