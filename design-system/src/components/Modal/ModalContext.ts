import { createContext } from 'react';

export type ModalContextValues = {
    isMobileFullscreen: boolean;
    isOpen: boolean;
    variant: 'default' | 'compact';
    size: 'md' | 'flex';
    showScrollIndicator: boolean;
    requestClose: () => void;
    setShowScrollIndicator: (value: boolean) => void;
};

export const ModalContext = createContext<ModalContextValues | undefined>(
    undefined
);
