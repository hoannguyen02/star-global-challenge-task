import React, { useCallback } from 'react';
import './App.scss';
import SquareBox from './components/square-box';
import TransitionSpeed from './components/transition-speed';
import AreaContainer from './components/area-container';

const App = () => {
    const handleOnClick = useCallback((e) => {
        console.log('handleOnClick type', e.type);
    }, []);

    return (
        <div className="App">
            <TransitionSpeed />
            <SquareBox />
            <AreaContainer onClick={handleOnClick} />
        </div>
    );
};

export default App;
