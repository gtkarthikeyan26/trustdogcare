import React from 'react';
import { cn } from '../../utils/cn';
import { ToastProps } from './types';
import { Span } from '..';

const Toast = ({ toast: { message, variant, removeItself } }: ToastProps) => {
    const classNames = cn(
        'absolute top-0 flex animate-enter-and-exit-from-top flex-row items-center justify-center rounded-full bg-grey-700 px-6 py-2 shadow-md',
        { 'bg-utility-error': variant === 'error' }
    );

    return (
        <div className={classNames} onAnimationEnd={removeItself}>
            <Span size="sm" className="text-utility-white">
                {message}
            </Span>
        </div>
    );
};

export default Toast;
