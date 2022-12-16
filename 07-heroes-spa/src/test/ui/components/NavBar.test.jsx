import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../auth/context';
import { Navbar } from "../../../ui/components/NavBar";
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}) );

describe('Pruebas en <NavBar />', () => {

    const contextAuth = {
        logged: true,
        user: {
            id: '123',
            name: 'Kevin'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextAuth}>

                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>

            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Kevin') ).toBeTruthy();

    });

    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {


        render(
            <AuthContext.Provider value={contextAuth}>

                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>

            </AuthContext.Provider>
        );
        
        const logoutBtn = screen.getByRole('button');

        fireEvent.click(logoutBtn); 

        expect( contextAuth.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {replace: true});

    });

});

