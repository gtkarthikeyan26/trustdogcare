import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import TypographyColorVariant, {
    TypographyCommons,
    TypographySizeVariant,
    colorVariants,
    sizeVariants,
} from '../common';
import { cn } from '../../../utils/cn';

type TypographyProps = ComponentPropsWithoutRef<'span'> &
    TypographyCommons & {
        color?: TypographyColorVariant;
        size?: TypographySizeVariant;
    };

const Span = forwardRef<HTMLSpanElement, TypographyProps>(
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
        const classNames = cn(
            colorVariants[color],
            sizeVariants[size],
            { 'font-semibold': bold },
            { italic: italic },
            className
        );
        return <span ref={ref} className={classNames} {...rest} />;
    }
);
Span.displayName = 'Span';

export default Span;
