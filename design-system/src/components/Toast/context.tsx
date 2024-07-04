import React, { createContext, useCallback, useContext, useState } from 'react';

import Toast from './Toast';
import type { Variant, ToastData, ToastContextTypes } from './types';
import ToastsContainer from './ToastsContainer';

const ToastContext = createContext<ToastContextTypes | null>(null);

const generateRandomId = () =>
    Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '');

export const ToastProvider: React.FC = ({ children }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const addToast = useCallback(
        (message: string, options?: { variant?: Variant }) => {
            const id = generateRandomId();

            const removeItself = () => {
                setToasts((prevToasts) =>
                    prevToasts.filter((prevToast) => prevToast.id !== id)
                );
            };

            setToasts((prevToasts) => [
                ...prevToasts,
                { id, message, variant: options?.variant, removeItself },
            ]);
        },
        []
    );

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastsContainer>
                {toasts.map((toast) => (
                    <Toast key={toast.id} toast={toast} />
                ))}
            </ToastsContainer>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
};
