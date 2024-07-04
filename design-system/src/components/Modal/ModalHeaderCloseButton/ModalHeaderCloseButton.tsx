import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { CloseIcon } from '../../../atoms/icons';
import { useModal } from '../useModal';

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'children'>;

const ModalHeaderCloseButton = forwardRef<HTMLButtonElement, Props>(
    ({ className, onClick, ...rest }, ref) => {
        const { requestClose } = useModal();
        const classNames = clsx(
            'absolute left-3 h-12 w-12 cursor-pointer border-0 p-0',
            className
        );

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (typeof onClick === 'function') {
                onClick(e);
            }

            requestClose();
        };

        return (
            <button
                {...rest}
                ref={ref}
                type="button"
                className={classNames}
                onClick={handleClick}
            >
                <CloseIcon className="h-5 w-5 text-grey-700" />
            </button>
        );
    }
);

export default ModalHeaderCloseButton;
