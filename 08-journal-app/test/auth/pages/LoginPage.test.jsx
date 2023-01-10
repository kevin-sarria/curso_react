import { JoinLeftSharp } from "@mui/icons-material";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { startGoogleSingIn } from '../../../src/store/auth/thunks';
import { notAuthenticatedState } from "../../fixtures/authFixtures";


const mockStartGoogleSignIn = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSingIn: () => mockStartGoogleSignIn
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

    test('Debe de mostrar el componente correctamente', () => {

        render(
            <Provider store = { store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // screen.debug();

        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);

    })


    test('Boton de google debe de llamar el startGoogleSignIn', () => {
        
        render(
            <Provider store = { store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect( mockStartGoogleSignIn ).toHaveBeenCalled();

    });

});


