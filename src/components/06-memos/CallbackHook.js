import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10); 

    const increment = useCallback((num) => {
            setCounter(c => c + num);
        },
        [ setCounter ],
    )
    
    return (
        <div>
            <h1>CallbackHook</h1>
            <h3>useCallback: <small>{ counter }</small></h3>
            <hr/>

            <ShowIncrement increment={ increment } />
            
        </div>
    )
}
