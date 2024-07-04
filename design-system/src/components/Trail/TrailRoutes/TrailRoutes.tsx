import React, { useMemo } from 'react';
import type { TrailRouteProps } from '../TrailRoute';
import { TrailRouteContext } from '../TrailRouteContext';
import { useTrail } from '../useTrail';

export type TrailRoutesProps = {
    children: React.ReactNode;
};

export type TrailStepValues = {
    path: string;
    next?: string;
    Component: React.ReactNode;
};

function createFromChildren(children: React.ReactNode) {
    return React.Children.map(children, (child) => {
        if (!React.isValidElement<TrailRouteProps<typeof child>>(child)) {
            return null;
        }

        if (typeof child.props.path !== 'string') {
            return null;
        }

        return {
            path: child.props.path,
            Component: child.props.Component,
        };
    }) as TrailStepValues[];
}

const TrailRoutes = ({ children }: TrailRoutesProps) => {
    const steps = useMemo(() => createFromChildren(children), [children]);

    if (!Array.isArray(steps)) {
        throw new Error('');
    }

    const { current } = useTrail();
    const currentRoute = useMemo(
        () => steps.find((s) => s.path === current),
        [steps, current]
    );

    if (!currentRoute) {
        return null;
    }

    return (
        <TrailRouteContext.Provider
            value={{
                path: currentRoute.path,
                next: currentRoute.next,
            }}
        >
            {React.createElement(
                currentRoute.Component as React.ComponentType,
                {}
            )}
        </TrailRouteContext.Provider>
    );
};

export default TrailRoutes;
