import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import './index.scss';

const SquareBox = forwardRef(({ transform, speed }, ref) => {
    // Get transition based on speed number
    const getTransition = useCallback((speed) => {
        if (!speed) return 'transform 0s cubic-bezier(0.075, 0.82, 0.165, 1)';
        return `transform ${speed}s cubic-bezier(0.075, 0.82, 0.165, 1)`;
    }, []);

    const [transition, setTransition] = useState(getTransition(speed));

    useEffect(() => {
        setTransition(getTransition(speed));
    }, [getTransition, speed]);

    return (
        <span
            ref={ref}
            style={{
                transition,
                ...(transform && { transform }),
            }}
            className="square-box"
        />
    );
});

export default SquareBox;
