import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { Span } from '../typography';
import {
    defaultStyle as buttonDefaultStyle,
    active as buttonActive,
    focus as buttonFocus,
    sizes as buttonSizes,
    variants as buttonVariants,
} from '../Button/Button';

// if adding more variants then make sure to add the same ones to "variants" and "ButtonVariant" in Button component
// otherwise TS would throw errors such as "Element implicitly has an 'any' type because expression ..."
// and "Property 'x' does not exist on type 'Record<ButtonVariant, string> | Record<LinkButtonsVariant, string>'."
export type LinkButtonsVariant =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'grey'
    | 'inverted';

export type LinkSize = 'sm' | 'md' | 'lg';

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
    variant?: LinkButtonsVariant;
    size?: LinkSize;
    isButtonStyle?: boolean;
    isFullwidth?: boolean;
    hasUnderline?: boolean;
    to?: string;
    spanClassName?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
};

const defaultStyle =
    'nowrap inline-flex cursor-pointer items-center justify-center gap-2';

const linkVariants: Record<LinkButtonsVariant, string> = {
    primary: 'text-primary-700 font-semibold',
    secondary: 'text-secondary-500 font-semibold',
    accent: 'text-accent-500 font-semibold',
    grey: 'text-grey-700 font-semibold',
    inverted: 'text-grey-700 font-semibold',
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            isButtonStyle = false,
            isFullwidth = false,
            hasUnderline = !isButtonStyle,
            className = null,
            spanClassName = null,
            children,
            to = '/',
            leftIcon = null,
            rightIcon = null,
            ...rest
        },
        ref
    ) => {
        const buttonSizeClasses = isButtonStyle
            ? buttonSizes[size]
            : 'text-sm lg:text-md';
        const classNames = cn(
            defaultStyle,
            { [linkVariants[variant]]: !isButtonStyle },
            { 'w-full': isFullwidth },
            { underline: hasUnderline },
            { 'no-underline': !hasUnderline },
            buttonSizeClasses,
            spanClassName
        );
        const linkClassNames = cn(
            {
                'no-underline': !hasUnderline,
                'w-full': isFullwidth,
                [buttonDefaultStyle]: isButtonStyle,
                [buttonActive]: isButtonStyle,
                [buttonFocus]: isButtonStyle,
                [buttonVariants[variant]]: isButtonStyle,
            },
            className
        );

        return (
            <RouterLink ref={ref} to={to} {...rest} className={linkClassNames}>
                {typeof children === 'string' ? (
                    <Span className={classNames} color="none" size="none">
                        {leftIcon}
                        {children}
                        {rightIcon}
                    </Span>
                ) : (
                    <>
                        {leftIcon}
                        {children}
                        {rightIcon}
                    </>
                )}
            </RouterLink>
        );
    }
);

Link.displayName = 'Link';

export default Link;
