import React from 'react';
import './InOut.css';

const userInput = (props) => {
    return (
        <div className="userInput">
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default userInput;