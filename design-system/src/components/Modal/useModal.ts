import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export function useModal() {
    const ctx = useContext(ModalContext);

    if (typeof ctx === 'undefined') {
        throw '';
    }

    return ctx;
}
