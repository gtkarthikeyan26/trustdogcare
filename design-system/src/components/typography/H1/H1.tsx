import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import TypographyColorVariant, { colorVariants } from '../common';
import { clsx } from 'clsx';

type TypographyProps = ComponentPropsWithoutRef<'h1'> & {
    isHero: boolean;
    color?: TypographyColorVariant;
};

const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ color = 'primary', isHero = false, className = null, ...rest }, ref) => {
        const defaultClassName = isHero
            ? 'text-[2rem] md:text-[4.5rem] leading-[2.75rem] md:leading-[5.75rem]'
            : 'text-[2rem] md:text-[2.5rem] leading-[2.75rem] md:leading-[3.5rem]';
        const classNames = clsx(
            'font-bold',
            defaultClassName,
            colorVariants[color],
            className
        );
        return <h1 ref={ref} className={classNames} {...rest} />;
    }
);

H1.displayName = 'H1';

export default H1;
