import React, { useState, useEffect } from 'react';



const Advice = () => {
    const [requestAdvice, setRequestAdvice] = useState([]);
    
    
    // const fetchAdvice = () => {
    //     const id = match.params.advice;
    //     fetch(`https://api.adviceslip.com/advice${advice}`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //         setRequestAdvice(res);
    //     })
    //     .catch(console.error);
    // };


    // useEffect(() => {
    //     fetchAdvice();
    // }, []);


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

            </div>
        </div>
    );
};

export default Advice;