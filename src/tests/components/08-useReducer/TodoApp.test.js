import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => {
    
    const wrapper = shallow( <TodoApp /> );

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de agregar un TODO', () => {
        
        // no funciona en React 17
        // const wrapper = mount( <TodoApp /> );
        // act( () =>{
        //     wrapper.find('TodoForm').prop('handleAdd')( demoTodos[0] );
        //     wrapper.find('TodoForm').prop('handleAdd')( demoTodos[1] );
        // })
        // expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2)');

        const wrapper = shallow( <TodoApp /> );
        wrapper.find('TodoForm').prop('handleAdd')( demoTodos[0] );
        wrapper.find('TodoForm').prop('handleAdd')( demoTodos[1] );
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2)');

    });
    
    test('debe eliminar un TODO', () => {
        
        wrapper.find('TodoForm').prop('handleAdd')( demoTodos[0] );
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (1)');

        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (0)');

    });
    
})