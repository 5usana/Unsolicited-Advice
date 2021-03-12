import React from 'react';

const Buttons = ({fetchAdvice}) => {
 

    return (
        <div>
            <button onClick={fetchAdvice}>WANT MORE?</button>
          
        </div>
    );
};

export default Buttons;