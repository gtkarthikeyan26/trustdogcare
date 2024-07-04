import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { WarningIcon } from '../../atoms/icons';

type ErrorMessageProps = ComponentPropsWithoutRef<'div'>;

const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
    ({ children, className = null }, ref) => {
        const classNames = clsx('flex text-utility-error', className);
        return (
            <div className={classNames} ref={ref}>
                <WarningIcon className="!mt-1 mr-1 h-4 w-4 flex-shrink-0" />
                <p className="m-0 text-sm leading-6">{children}</p>
            </div>
        );
    }
);

export default ErrorMessage;
