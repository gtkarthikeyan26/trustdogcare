export const PUSH = 'PUSH';
export const REPLACE = 'REPLACE';
export const BACK = 'BACK';

type Action<T extends string, P> = {
    type: T;
    payload: P;
};

type PushAction = Action<typeof PUSH, string>;

type ReplaceAction = Action<typeof REPLACE, string>;

type BackAction = Action<typeof BACK, number | undefined>;

export type TrailAction = PushAction | ReplaceAction | BackAction;

export type TrailState = {
    current: string;
    history: string[];
};

export function reducer(state: TrailState, action: TrailAction): TrailState {
    switch (action.type) {
        case PUSH: {
            if (state.current === action.payload) {
                return state;
            }

            return {
                ...state,
                current: action.payload,
                history: [...state.history, action.payload],
            };
        }
        case REPLACE: {
            if (state.current === action.payload) {
                return state;
            }

            return {
                ...state,
                current: action.payload,
                history: [...state.history.slice(0, -1), action.payload],
            };
        }
        case BACK: {
            const count = Math.abs(action.payload || 1);

            if (state.history.length < count + 1) {
                return state;
            }

            const history = state.history.slice(0, -count);

            return {
                ...state,
                current: history[history.length - 1],
                history,
            };
        }
    }
}
