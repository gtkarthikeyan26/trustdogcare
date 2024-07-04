import React, { useReducer, useEffect, useCallback } from 'react';
import { PUSH, REPLACE, BACK, reducer } from './reducer';
import { TrailContext } from './TrailContext';

export type TrailProps = {
    children: React.ReactNode;
    initialPath: string;
    onChange?: (step: string) => void;
};

const Trail = ({ children, initialPath, onChange }: TrailProps) => {
    const [state, dispatch] = useReducer(
        reducer,
        {
            initialPath,
        },
        (args) => ({
            // TODO(lucas): derive from children traversing the react tree
            current: args.initialPath,
            history: [args.initialPath],
        })
    );

    const handlePush = useCallback((path: string) => {
        dispatch({
            type: PUSH,
            payload: path,
        });
    }, []);

    const handleReplace = useCallback((path: string) => {
        dispatch({
            type: REPLACE,
            payload: path,
        });
    }, []);

    const handleBack = useCallback((count?: number) => {
        dispatch({
            type: BACK,
            payload: count,
        });
    }, []);

    useEffect(() => {
        if (typeof onChange === 'function') {
            if (typeof state.current === 'string') {
                onChange(state.current);
            }
        }
    }, [state.current, onChange]);

    return (
        <TrailContext.Provider
            value={{
                current: state.current,
                history: state.history,
                push: handlePush,
                replace: handleReplace,
                back: handleBack,
            }}
        >
            {children}
        </TrailContext.Provider>
    );
};

export default Trail;
