import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);

    })

    test('debe de agregar un TODO', () => {
        
        const newTodo = {
            id: 3,
            desc: 'aprender express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state).toEqual([ ...demoTodos, newTodo ]);
        
    })

    test('debe de borrar un TODO', () => {

        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state[0]).toEqual(demoTodos[1]);
        
    })
    
    test('debe de hacer el toggle de un TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toEqual(true);
        expect(state[1].done).toEqual(false);
        expect(state[1]).toEqual(demoTodos[1]);
        
    })

})