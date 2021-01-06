import React, { useState, useEffect } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0});
    const { x, y } = coords;

    useEffect(() => {

        console.log('componente montado');
        
        const mouseMove = (e) => {
            const coords = {  x: e.x, y: e.y };
            setCoords(coords);
            // console.log(cors);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);


    return (
        <>
            <h3>Eres una pta</h3>
            <p>
                x: { x }, y: { y }
            </p>
        </>
    )
}
