import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('again :c');
    
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(4);
            }}
        >
            Incrementar
        </button>
    )   
})
