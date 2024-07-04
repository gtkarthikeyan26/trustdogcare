import React, {
    useRef,
    useEffect,
    useCallback,
    forwardRef,
    ComponentPropsWithoutRef,
} from 'react';
import { mergeRefs } from '../../utils/react';
import { isClickInsideElement } from '../../utils/dom';

export type Props = ComponentPropsWithoutRef<'dialog'> & {
    isOpen: boolean;
    onRequestClose: () => void;
};

/**
 * Returns user's current horizontal scroll position that can be used
 * when restoring the scroll position.
 */
function lock(el: HTMLElement): number {
    const scrollBarWidth = window.innerWidth - el.clientWidth;
    const scrollY = window.scrollY;

    el.style.position = 'fixed';
    el.style.width = `calc(100% - ${scrollBarWidth}px)`;
    el.style.top = `-${scrollY}px`;
    el.style.overflow = 'hidden';

    return scrollY;
}

function unlock(el: HTMLElement) {
    el.style.removeProperty('position');
    el.style.removeProperty('width');
    el.style.removeProperty('top');
    el.style.removeProperty('overflow');
}

function useScrollLock(locked: boolean) {
    const scrollOffset = useRef<number>(0);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const body = document.querySelector('body');

        if (!body) {
            return;
        }

        if (locked) {
            scrollOffset.current = lock(body);
        } else {
            unlock(body);

            if (typeof window !== 'undefined') {
                window.scrollTo(0, scrollOffset.current);
            }
        }
    }, [locked]);

    useEffect(() => {
        const body = document.querySelector('body');

        if (!body) {
            return;
        }

        return () => {
            unlock(body);

            if (typeof window !== 'undefined' || !locked) {
                window?.scrollTo(0, scrollOffset.current);
            }
        };
    }, []);
}

const Dialog = forwardRef<HTMLDialogElement, Props>(
    ({ isOpen, children, className, onRequestClose, ...rest }, ref) => {
        const dialogRef = useRef<HTMLDialogElement>(null);
        useScrollLock(isOpen);

        const handleClose = useCallback(() => {
            onRequestClose?.();
        }, [onRequestClose]);

        const handleClick = useCallback(
            (event: React.MouseEvent<HTMLDialogElement>) => {
                if (!dialogRef.current) {
                    return;
                }

                const nativeEvent = event.nativeEvent;

                if (dialogRef.current !== nativeEvent.target) {
                    return;
                }

                if (
                    !isClickInsideElement(dialogRef.current, event.nativeEvent)
                ) {
                    handleClose();
                }
            },
            [handleClose]
        );

        const handleKeyDown = useCallback(
            (event: React.KeyboardEvent<HTMLDialogElement>) => {
                if (event.key === 'Escape') {
                    handleClose();
                }
            },
            [handleClose]
        );

        useEffect(() => {
            if (isOpen) {
                dialogRef.current?.showModal?.();
            } else {
                dialogRef.current?.close?.();
            }
        }, [isOpen]);

        return (
            <dialog
                {...rest}
                ref={mergeRefs(ref, dialogRef)}
                className={className}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
            >
                {children}
            </dialog>
        );
    }
);

export default Dialog;
