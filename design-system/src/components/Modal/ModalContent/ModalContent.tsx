import React, { useRef, useEffect, forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { mergeRefs } from '../../../utils/react';
import { useModal } from '../useModal';

export type Props = ComponentPropsWithoutRef<'div'>;

const SCROLL_OFFSET = 40;

const variants = {
    default: 'px-6 py-8 md:p-12',
    compact: 'px-6 pb-8 md:px-12 md:pb-12',
};

const ModalContent = forwardRef<HTMLDivElement, Props>(
    ({ className, children, ...rest }, ref) => {
        const { variant, setShowScrollIndicator } = useModal();
        const contentRef = useRef<HTMLDivElement>(null);
        const isPendingUpdateRef = useRef<boolean>(false);
        const classNames = clsx(
            'relative grow overflow-x-auto overflow-y-auto',
            variants[variant],
            className
        );

        useEffect(() => {
            if (typeof window === 'undefined') {
                return;
            }

            if (!contentRef.current) {
                return;
            }

            // Calculate the scroll height before the scroll listener to set
            // the correct value on the first render frame.
            const scrollTop = Math.abs(
                contentRef.current.scrollHeight -
                    contentRef.current.scrollTop -
                    contentRef.current.clientHeight
            );

            if (scrollTop >= SCROLL_OFFSET) {
                contentRef.current?.style.setProperty(
                    '--scroll-offset',
                    `${contentRef.current.scrollTop}px`
                );

                setShowScrollIndicator(true);
            }

            const handleScroll = (e: Event) => {
                if (isPendingUpdateRef.current) {
                    return;
                }

                window.requestAnimationFrame(() => {
                    const target = e.target as HTMLElement;
                    const scrollTop = Math.abs(
                        target.scrollHeight -
                            target.scrollTop -
                            target.clientHeight
                    );

                    setShowScrollIndicator(scrollTop >= SCROLL_OFFSET);

                    contentRef.current?.style.setProperty(
                        '--scroll-offset',
                        `${target.scrollTop}px`
                    );

                    isPendingUpdateRef.current = false;
                });
            };

            contentRef.current.addEventListener('scroll', handleScroll);

            return () => {
                contentRef.current?.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return (
            <div
                {...rest}
                ref={mergeRefs(contentRef, ref)}
                className={classNames}
            >
                {children}
            </div>
        );
    }
);

export default ModalContent;
