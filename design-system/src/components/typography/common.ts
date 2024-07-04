type TypographyColorVariant =
    | 'default'
    | 'primary'
    | 'accent'
    | 'error'
    | 'grey'
    | 'white'
    | 'none';
export default TypographyColorVariant;

export const colorVariants: Record<TypographyColorVariant, string> = {
    default: 'text-grey-700',
    primary: 'text-primary-700',
    accent: 'text-accent-500',
    error: 'text-utility-error',
    grey: 'text-grey-500',
    white: 'text-utility-white',
    none: '',
};

export type TypographySizeVariant =
    | 'xs'
    | 'sm'
    | 'standard'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'none';

export const sizeVariants: Record<TypographySizeVariant, string> = {
    xs: 'text-[0.625rem] leading-[1rem]',
    sm: 'text-[0.875rem] leading-[1.5rem]',
    standard: 'text-[1rem] leading-[1.75rem]',
    lg: 'text-[1.25rem] leading-[2rem]',
    xl: 'text-[1.5rem] leading-[2.25rem]',
    '2xl': 'text-xl leading-[2rem] md:text-2xl lg:leading-[2.5rem]',
    none: '',
};

export type TypographyCommons = {
    bold?: boolean;
    italic?: boolean;
};
