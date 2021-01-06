import { renderHook, act } from "@testing-library/react-hooks"
import { useCounter } from "../../components/hooks/useCounter";



describe('Pruebas en useCounter', () => {

    test('debe de retornar valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    })

    test('debe de retornar el valor asignado', () => {
        
        const value = 100;
        const { result } = renderHook( () => useCounter(value) );
        expect( result.current.counter ).toBe(value);

    })
    
    test('debe de incrementar 1', () => {
        
        const value = 100;
        const { result } = renderHook( () => useCounter(value) );
        const { increment } = result.current;

        act( () => {
            increment();
        })

        expect( result.current.counter ).toBe(value + 1);

    })

    test('debe de decrementar 1', () => {
        
        const value = 100;
        const { result } = renderHook( () => useCounter(value) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        })

        expect( result.current.counter ).toBe(value - 1);

    })


    test('debe de decrementar 1 y reiniciar', () => {
        
        const value = 100;
        const { result } = renderHook( () => useCounter(value) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
        })

        expect( result.current.counter ).toBe(value - 1);

        act( () => {
            reset();
        })

        expect( result.current.counter ).toBe(value);
    })
})