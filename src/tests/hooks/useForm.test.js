import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from "../../components/hooks/useForm";


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'ricardo',
        email: 'richibq20@gmai.com'
    }

    test('debe de retornar valores por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset] = result.current;

        expect( formValues ).toBe(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');

    })

    test('debe de cambiar el nombre del form', () => {
        
        const newName = 'newName';
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        
        act( () => {
            handleInputChange({ 
                target: { 
                    name: 'name', 
                    value: newName
                }
            });
        })

        const [ formValues ] = result.current;
        expect( formValues.name ).toBe(newName);

    })

    test('debe de cambiar el nombre del form y luego reset', () => {
        
        const newName = 'newName';
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset] = result.current;
        
        act( () => {
            handleInputChange({ target: { name: 'name', value: newName}});
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual({ ...initialForm, name: newName });
        
        act( () => {
            reset();
        })

        const [ restFormValues ] = result.current;
        expect( restFormValues.name ).toBe(initialForm.name);

    })

})