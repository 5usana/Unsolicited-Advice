import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';



const Advice = () => {
    const [generateAdvice, setGenerateAdvice] = useState({slip:{advice:""}});
    
    const fetchAdvice = () => {
        fetch(`https://api.adviceslip.com/advice`)
        .then((res) => res.json())
        .then((res) => {
            setGenerateAdvice(res);
        })
        .catch(console.error);
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="advice-container">
            <h3>Random Advice</h3>
            <div className="random-advice">
            {generateAdvice.slip.advice}
            </div>
            <Buttons fetchAdvice={fetchAdvice}/>
        </div>
    );
};

export default Advice;