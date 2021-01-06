import React from 'react';
import { shallow } from 'enzyme';
import { TodoForm } from '../../../components/08-useReducer/TodoForm';

describe('Pruebas en <TodoForm />', () => {
    
    const handleAdd = jest.fn();

    const wrapper = shallow(
        <TodoForm
            handleAdd={ handleAdd }
        />
    );

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('NO debe de llamar el handleAdd', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} }); // simunlar submit

        expect( handleAdd ).toHaveBeenCalledTimes(0);

    });

    test('debe de llamar el handleAdd', () => {
        
        const value = 'Aprender xxx';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} }); // simunlar submit

        expect( handleAdd ).toHaveBeenCalledTimes(1);
        expect( handleAdd ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handleAdd ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect( wrapper.find('input').prop('value') ).toBe('');

    });
    
})