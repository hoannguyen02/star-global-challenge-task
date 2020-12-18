import React, { forwardRef } from 'react';
import './index.scss';

const AreaContainer = forwardRef(({ onClick, children }, ref) => (
    <div ref={ref} className="area-container" onClick={onClick}>
        {children}
    </div>
));

export default AreaContainer;
