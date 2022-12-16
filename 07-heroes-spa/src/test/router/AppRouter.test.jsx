import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from '../../router/AppRouter';
import { AuthContext } from "../../auth/context";


describe('Pruebas en <AppRouter />', () => {
    
    test('Debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(

            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                
                    <AppRouter />

                </AuthContext.Provider>
            </MemoryRouter>
            
        );

        expect( screen.getAllByText('Login') ).toBeTruthy();

    });


    test( 'Debe de mostrar el componente de Marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Kevin'
            }
        }

        render(

            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                
                    <AppRouter />

                </AuthContext.Provider>
            </MemoryRouter>
            
        );

        // screen.debug();

        expect( screen.getByText(contextValue.user.name) ).toBeTruthy();

    });

});
