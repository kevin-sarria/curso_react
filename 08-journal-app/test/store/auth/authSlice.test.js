import { authSlice, login, logout, checkingCredentials } from "../../../src/store/auth/authSlice";
import { demoUser, initialState, authenticatedState } from "../../fixtures/authFixtures";


describe('Pruebas en el AuthSlice', () => {

    test('Debe de regresar el estado inicial y llamarse "auth"', () => {

        expect(authSlice.name).toBe('auth');

        const state = authSlice.reducer(initialState, {});

        // console.log(state);

        expect(state).toEqual(initialState);

    });

    test('Debe de realizar la autenticacion', () => {

        const state = authSlice.reducer(initialState, login(demoUser));

        // console.log(state);

        expect(state).toEqual({
            status: 'authenticated',   // 'checking', 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });

    });


    test('Debe de realizar el logout sin argumentos', () => {

        // authenticatedState // logout sin argumentos

        const state = authSlice.reducer(authenticatedState, logout);

        expect(state).toEqual({
            status: 'not-authenticated',   // 'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });

    })


    test('Debe de realizar el logout con argumentos', () => {

        // authenticatedState // logout con argumentos

        const errorMessage = 'Credenciales no son correctas';

        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));

        expect(state).toEqual({
            status: 'not-authenticated',   // 'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage
        });

    })

    test('Debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer( authenticatedState, checkingCredentials() );

        expect( state.status ).toBe('checking');

    })

})


