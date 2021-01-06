import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Pruebas en <LoginScreen />', () => {
    
    const user = {
        id: 1, 
        name: 'ricardo'
    }
    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{ user, setUser }} >

            <AppRouter />

        </UserContext.Provider >
    );

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
})