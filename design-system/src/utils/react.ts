import * as React from 'react';

/**
 * Merge all react refs into one.
 *
 * Example:
 * ```jsx
 * const myRef = useRef(null);
 * const otherRef = useRef(null);
 *
 * <span ref={mergeRefs(myRef, otherRef, ...)} />
 * ```
 */
export function mergeRefs<E>(...refs: React.Ref<E>[]): React.Ref<E> {
    const validRefs = refs.filter(Boolean);

    return (node) => {
        for (const ref of validRefs) {
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref !== null) {
                (ref as React.MutableRefObject<E | null>).current = node;
            }
        }
    };
}
