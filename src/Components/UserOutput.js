import React from 'react';

import './InOut.css';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p style={props.style} >{props.name}</p>
            <p>{props.name}</p>
        </div>
    );
}

export default userOutput;