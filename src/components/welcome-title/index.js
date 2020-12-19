import React from 'react';
import GithubIcon from './GithubIcon';
import './index.scss';

const WelcomeTitle = () => {
    return (
        <h2 className="welcome-title">
            Hope you enjoy play around!
            <a href="https://github.com/hoannguyen02/star-global-challenge-task">
                <GithubIcon />
            </a>
        </h2>
    );
};

export default WelcomeTitle;
