import React, { useState } from 'react';
import '../02-useEffect/effects.css';

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const ReactSampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            
            <h1>Sample Ref</h1>
            <hr/>
            

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-4"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show hide
            </button>

        </div>
    )
}
