import React from 'react';

const Button = ({fetchAdvice}) => {
 

    return (
        <div>
            <button onClick={fetchAdvice}>Redo</button>
        </div>
    );
};

export default Button;