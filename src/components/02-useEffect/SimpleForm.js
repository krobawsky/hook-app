import React, { useState, useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ 
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey');
    }, []);

    useEffect( () => {
        // console.log('formState cambio');
    }, [formState]);

    useEffect( () => {
        // console.log('email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    } 

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" 
                    value={ name } onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" 
                    value={ email } onChange={ handleInputChange } />
            </div>

            { name === '123' && <Message/>}
            
        </>
    )
}
