import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    test('debe mostrarse correctamente', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    
        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostar la informacion', () => {
 
        useFetch.mockReturnValue({
            data: [{
                author: 'Ricardo',
                quote: 'Hi'
            }],
            loading: false,
            error: null
        });

        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });
    
        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hi');
        expect( wrapper.find('footer').text().trim() ).toBe('Ricardo');
        
    })

})