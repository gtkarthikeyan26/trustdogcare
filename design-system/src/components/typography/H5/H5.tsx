import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import TypographyColorVariant, {
    TypographyCommons,
    TypographySizeVariant,
    colorVariants,
    sizeVariants,
} from '../common';
import { clsx } from 'clsx';

type TypographyProps = ComponentPropsWithoutRef<'h5'> &
    TypographyCommons & {
        color?: TypographyColorVariant;
        size?: TypographySizeVariant;
    };

const H5 = forwardRef<HTMLHeadingElement, TypographyProps>(
    (
        {
            color = 'default',
            className = null,
            size = 'standard',
            bold,
            italic,
            ...rest
        },
        ref
    ) => {
        const classNames = clsx(
            colorVariants[color],
            sizeVariants[size],
            { 'font-semibold': bold },
            { italic: italic },
            className
        );
        return <h5 ref={ref} className={classNames} {...rest} />;
    }
);
H5.displayName = 'H5';

export default H5;
