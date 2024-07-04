import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import H5 from '../../typography/H5';
import { useModal } from '../useModal';

type Props = ComponentPropsWithoutRef<'div'> & {
    title?: string;
    shouldIncludeCloseFocus?: boolean;
};

const ModalHeader = forwardRef<HTMLDivElement, Props>(
    ({ title, className, children, ...rest }, ref) => {
        const { variant } = useModal();
        const classNames = clsx(
            'relative flex h-[72px] shrink-0 items-center justify-center border-0 p-3',
            variant === 'default' && 'border-b border-solid border-grey-300',
            className
        );

        const shouldShowTitle = () => {
            if (typeof title !== 'string') {
                return false;
            }

            if (variant === 'compact') {
                return false;
            }

            return true;
        };

        return (
            <div
                {...rest}
                ref={ref}
                className={classNames}
                style={{
                    gridArea: 'header',
                }}
            >
                {children}
                {shouldShowTitle() ? (
                    <H5 className="font-semibold">{title}</H5>
                ) : null}
            </div>
        );
    }
);

export default ModalHeader;
