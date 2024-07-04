import React from 'react';

export type TrailRouteProps<C> = {
    path: string;
    Component: C;
};

const TrailRoute = <C extends React.ComponentType>(_: TrailRouteProps<C>) => {
    throw new Error(
        'A <TrailRoute /> should be used as the child of <TrailRoutes />.'
    );
};

export default TrailRoute;
