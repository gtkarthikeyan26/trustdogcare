import React from 'react';

const ToastsContainer: React.FC = ({ children }) => {
    return (
        <dialog
            // The navbar z-index is 2004, so this need to be above that
            className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-[2200] m-0 flex h-screen w-screen items-center justify-center border-none bg-transparent p-0"
            open
        >
            {children}
        </dialog>
    );
};

export default ToastsContainer;
