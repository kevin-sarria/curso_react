import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroeById debe buscar heroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById( id );
        expect( heroe ).toEqual( {"id": 1, "name": "Batman", "owner": "DC"} );
     });


     test('getHeroeById debe retornar undefined si el heroe no existe', () => { 
        const id = 10;
        const heroe = getHeroeById( id );
        expect( heroe ).toBeFalsy();
     });


     test('getHeroesByOwner debe retornar los heroes mediante el campo Owner que sean de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe(3);
        // expect( heroes ).toEqual( [{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}] );        
        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
     });

     test('getHeroesByOwner debe retornar los heroes mediante el campo Owner que sean de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        expect(heroes.length).toBe(2);
        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
     });



 });



