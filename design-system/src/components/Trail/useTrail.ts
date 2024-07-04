import { useContext } from 'react';
import { TrailContext } from './TrailContext';

export function useTrail() {
    const context = useContext(TrailContext);

    if (typeof context === 'undefined') {
        throw new Error();
    }

    return context;
}
