
import { useState } from 'react';

    const Counter = () => {
        const [count, setCount] = useState(0);

        const handlePosClick = () =>{
            setCount(count + 1);
         };
   const handleNegClick = () =>{
      setCount(count - 1);
   };
           return (
               <>
        <p>The count is currently {count}</p>
        <button onClick={handlePosClick}>+</button>
        <button onClick={handleNegClick}>-</button>
        </>
    );
};

export default Counter;