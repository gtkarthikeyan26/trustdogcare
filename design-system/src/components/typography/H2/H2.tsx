import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import TypographyColorVariant, { colorVariants } from '../common';
import { clsx } from 'clsx';

type TypographyProps = ComponentPropsWithoutRef<'h2'> & {
    color?: TypographyColorVariant;
};

const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ color = 'default', className = null, ...rest }, ref) => {
        const defaultClassName =
            'text-[1.5rem] leading-[2.25rem] font-semibold';
        const classNames = clsx(
            defaultClassName,
            colorVariants[color],
            className
        );
        return <h2 ref={ref} className={classNames} {...rest} />;
    }
);

H2.displayName = 'H2';

export default H2;
