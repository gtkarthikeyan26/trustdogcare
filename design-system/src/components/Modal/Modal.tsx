import React, {
    useState,
    useCallback,
    forwardRef,
    ComponentPropsWithoutRef,
} from 'react';
import clsx from 'clsx';
import Dialog from '../../atoms/Dialog';
import { ModalContext } from './ModalContext';
import type { ModalContextValues } from './ModalContext';

export type Props = ComponentPropsWithoutRef<'dialog'> & {
    isOpen: ModalContextValues['isOpen'];
    isMobileFullscreen?: ModalContextValues['isMobileFullscreen'];
    variant?: ModalContextValues['variant'];
    size?: ModalContextValues['size'];
    onRequestClose: () => void;
};

const sizes: Record<ModalContextValues['size'], string> = {
    md: 'max-w-full md:w-[640px]',
    flex: 'max-w-full mx-auto md:max-w-[92vw] 2xl:max-w-[1440px]',
};

const Modal = forwardRef<HTMLDialogElement, Props>(
    (
        {
            isOpen,
            isMobileFullscreen = false,
            variant = 'default',
            size = 'md',
            className,
            children,
            onRequestClose,
            ...rest
        },
        ref
    ) => {
        const [showScrollIndicator, setShowScrollIndicator] =
            useState<boolean>(false);
        const classNames = clsx(
            'bottom-0 mb-0 mt-auto w-full flex-col rounded-t-lg border-0 bg-utility-white p-0 shadow outline-none backdrop:bg-utility-black backdrop:opacity-40 open:flex md:m-auto md:rounded-b-lg',
            sizes[size],
            isMobileFullscreen
                ? 'h-full max-h-full rounded-t-none md:h-fit md:rounded-t-lg'
                : 'h-fit max-h-[70%]',
            className
        );

        const handleClose = useCallback(() => {
            onRequestClose?.();
        }, [onRequestClose]);

        return (
            <ModalContext.Provider
                value={{
                    isOpen,
                    isMobileFullscreen,
                    variant,
                    size,
                    showScrollIndicator,
                    requestClose: handleClose,
                    setShowScrollIndicator,
                }}
            >
                <Dialog
                    {...rest}
                    ref={ref}
                    isOpen={isOpen}
                    onRequestClose={handleClose}
                    className={classNames}
                >
                    {children}
                </Dialog>
            </ModalContext.Provider>
        );
    }
);

export default Modal;
