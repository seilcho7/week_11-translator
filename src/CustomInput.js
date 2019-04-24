import React from 'react';

function CustomInput(props) {
    return (
        <div className="sparkles">
            <input onChange={ props.handleInput } />
        </div>
    )
}

export default CustomInput;