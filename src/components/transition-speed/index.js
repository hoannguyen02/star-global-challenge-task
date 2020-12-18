import React, { useCallback, useState } from 'react';
import { DEFAULT_TRANSITION_SPEED } from '../../constants';
import { debounce, validateTransitionSpeed } from '../../utils';
import './index.scss';

const TransitionSpeed = ({ onSpeedChange }) => {
    const [value, setValue] = useState(DEFAULT_TRANSITION_SPEED);
    const [errors, setErrors] = useState([]);
    const handleOnChange = useCallback(
        ({ target }) => {
            const { value } = target;
            setValue(value);
            const [status, errs] = validateTransitionSpeed(value);
            if (status) {
                onSpeedChange(value);
                setErrors([]);
            } else {
                setErrors(errs);
            }
        },
        [onSpeedChange]
    );

    return (
        <div
            className={`transition-speed ${errors.length > 0 ? 'invalid' : ''}`}
        >
            <label>Transition speed</label>
            <input
                className="input"
                onKeyUp={debounce((event) => {
                    handleOnChange(event);
                }, 500)}
                defaultValue={value}
            />
            {errors.length > 0 && (
                <span className="speed-errors">
                    {errors.map((error, index) => (
                        <span key={`speed-error${index}`}>{error}</span>
                    ))}
                </span>
            )}
        </div>
    );
};

export default TransitionSpeed;
