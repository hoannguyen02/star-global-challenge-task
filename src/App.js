import React, { useCallback, useRef, useState } from 'react';
import './App.scss';
import SquareBox from './components/square-box';
import TransitionSpeed from './components/transition-speed';
import AreaContainer from './components/area-container';
import { DEFAULT_TRANSITION_SPEED } from './constants';
import GithubIcon from './shared/icons/GithubIcon';

const App = () => {
    const areaRef = useRef();
    const { x: areaX, y: areaY } =
        (areaRef.current && areaRef.current.getBoundingClientRect()) || {};
    const [transform, setTransform] = useState(0);
    const [speed, setSpeed] = useState(DEFAULT_TRANSITION_SPEED);
    const squareRef = useRef();

    const handleOnClick = useCallback(
        (e) => {
            e.preventDefault();
            const x = e.pageX - areaX - squareRef.current.offsetWidth / 2;
            const y = e.pageY - areaY - squareRef.current.offsetHeight / 2;
            setTransform(`translate3d(${x}px, ${y}px, 0)`);
        },
        [areaX, areaY]
    );

    const handleOnSpeedChange = useCallback((value) => {
        setSpeed(value);
    }, []);

    return (
        <div className="App">
            <h2 className="welcome-title">
                Hope you enjoy play around!
                <a href="https://github.com/hoannguyen02/star-global-challenge-task">
                    <GithubIcon />
                </a>
            </h2>
            <TransitionSpeed onSpeedChange={handleOnSpeedChange} />
            <AreaContainer ref={areaRef} onClick={handleOnClick}>
                <SquareBox
                    ref={squareRef}
                    transform={transform}
                    speed={speed}
                />
            </AreaContainer>
        </div>
    );
};

export default App;
