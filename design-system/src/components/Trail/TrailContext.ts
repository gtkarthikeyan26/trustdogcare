import { createContext } from 'react';

export type TrailContextValue = {
    current: string;
    history: string[];
    push: (step: string) => void;
    replace: (step: string) => void;
    back: (count?: number) => void;
};

export const TrailContext = createContext<TrailContextValue | undefined>(
    undefined
);
