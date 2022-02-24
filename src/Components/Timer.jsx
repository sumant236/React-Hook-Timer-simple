import React, { useEffect, useState } from 'react'

export const Timer = ({initial, end}) => {
    const [count, setCount] = useState(initial);
    useEffect(()=>{
        const id = setInterval(()=>{
            setCount((prev)=>{
                if(prev+1==end)
                    clearInterval(id);
                return prev+1;
            });
        }, 1000)
        return ()=>{clearInterval(id)};
    }, [end])
    return (

    <div>
        <h1>Initial time: {initial}</h1>
        <h1>End time: {end}</h1>
        <h1>Count: {count}</h1>
    </div>
  )
}
