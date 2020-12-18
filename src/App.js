import React from 'react';
import './App.scss';
import SquareBox from './components/square-box';
import Input from './components/input';
import AreaContainer from './components/area-container';

const App = () => {
    return (
        <div className="App">
            <SquareBox />
            <Input />
            <AreaContainer />
        </div>
    );
};

export default App;
