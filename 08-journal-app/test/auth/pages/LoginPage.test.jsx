import { EjectSharp, JoinLeftSharp } from "@mui/icons-material";
import { Experimental_CssVarsProvider } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { startGoogleSingIn } from '../../../src/store/auth/thunks';
import { notAuthenticatedState } from "../../fixtures/authFixtures";


const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSingIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({ email, password }) => {
        return () => mockStartLoginWithEmailPassword({ email, password })
    }
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}));


const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }


});



describe('Pruebas en el <LoginPage />', () => {

    beforeEach( () => jest.clearAllMocks() );

    // test('Debe de mostrar el componente correctamente', () => {

    //     render(
    //         <Provider store = { store }>
    //             <MemoryRouter>
    //                 <LoginPage />
    //             </MemoryRouter>
    //         </Provider>
    //     );

    //     // screen.debug();

    //     expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);

    // })


    // test('Boton de google debe de llamar el startGoogleSignIn', () => {
        
    //     render(
    //         <Provider store = { store }>
    //             <MemoryRouter>
    //                 <LoginPage />
    //             </MemoryRouter>
    //         </Provider>
    //     );

    //     const googleBtn = screen.getByLabelText('google-btn');
    //     fireEvent.click(googleBtn);

    //     expect( mockStartGoogleSignIn ).toHaveBeenCalled();

    // });


    test('Submit debe de llamar el StartLoginWithEmailPassword', () => {

        const email = 'kevin@kevin.com';
        const password = '12345678';

        render(
            <Provider store = { store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole( 'textbox', { name:'Correo' } );
        fireEvent.change( emailField, { target: { name: 'email', value: email } } );


        const passwordField = screen.getByTestId('password');
        fireEvent.change( passwordField, { target: { name: 'password', value: password } } );

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm);

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({
            email: email,
            password: password
        });

    });

});


