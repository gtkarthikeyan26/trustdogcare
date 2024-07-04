import { createContext } from 'react';

export type TrailRouteContextValue = {
    path: string;
    next?: string;
};

export const TrailRouteContext = createContext<
    TrailRouteContextValue | undefined
>(undefined);
