import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { ChevronLeftIcon } from '../../../atoms/icons';

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'children'>;

const ModalHeaderBackButton = forwardRef<HTMLButtonElement, Props>(
    ({ className, ...rest }, ref) => {
        const classNames = clsx(
            'absolute left-3 h-12 w-12 cursor-pointer border-0 p-0',
            className
        );

        return (
            <button {...rest} ref={ref} type="button" className={classNames}>
                <ChevronLeftIcon className="h-5 w-5 text-grey-700" />
            </button>
        );
    }
);

export default ModalHeaderBackButton;
