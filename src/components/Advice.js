import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';



const Advice = () => {
    const [requestAdvice, setRequestAdvice] = useState({slip:{advice:""}});
    
    
    const fetchAdvice = () => {
       
        fetch(`https://api.adviceslip.com/advice`)
        .then((res) => res.json())
        .then((res) => {
            setRequestAdvice(res);
        })
        .catch(console.error);
    };


    useEffect(() => {
        fetchAdvice();
    }, []);


    // example- do i pull slip. id, advice?(slip/slip_id.advice)
    // {
    //     "slip": {
    //       "slip_id": "2",
    //        "advice": "Smile and the world smiles with you. Frown and you're on your own."
    //     }
    //   }
      



    return (
        <div className="advice-container">
            <h1>Random Advice</h1>
            <div className="random-advice">
            {requestAdvice.slip.advice}
            </div>
            <Buttons />
        </div>
    );
};

export default Advice;