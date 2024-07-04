import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import TypographyColorVariant, {
    TypographyCommons,
    TypographySizeVariant,
    colorVariants,
    sizeVariants,
} from '../common';
import { clsx } from 'clsx';

type TypographyProps = ComponentPropsWithoutRef<'small'> &
    TypographyCommons & {
        color?: TypographyColorVariant;
        size?: TypographySizeVariant;
    };

const Small = forwardRef<HTMLSpanElement, TypographyProps>(
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
        return <small ref={ref} className={classNames} {...rest} />;
    }
);
Small.displayName = 'Small';

export default Small;
