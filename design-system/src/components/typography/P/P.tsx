import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import TypographyColorVariant, {
    TypographyCommons,
    TypographySizeVariant,
    colorVariants,
    sizeVariants,
} from '../common';
import { clsx } from 'clsx';

type TypographyProps = ComponentPropsWithoutRef<'p'> &
    TypographyCommons & {
        color?: TypographyColorVariant;
        size?: TypographySizeVariant;
    };

const P = forwardRef<HTMLParagraphElement, TypographyProps>(
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
        return <p ref={ref} className={classNames} {...rest} />;
    }
);
P.displayName = 'P';

export default P;
