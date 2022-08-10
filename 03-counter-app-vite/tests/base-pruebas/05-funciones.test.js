
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas 05-funciones', () => { 
    test('getUSer debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );


     });

     test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Kevin'

        const user = getUsuarioActivo(name);

        const testUserActive = {
            uid: 'ABC567',
            username: name
        }

        expect( testUserActive ).toEqual( user );

     });

 })








