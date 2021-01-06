import React from 'react';
import { shallow } from 'enzyme';
import { ReactSampleRef } from '../../../components/04-useRef/ReactSampleRef';

describe('Pruebas en <ReactSampleRef />', () => {
    
    const wrapper = shallow(<ReactSampleRef />);

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

    })

    test('debe mostrarse <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);

    })

})