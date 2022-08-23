import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");


describe('Probando GifGrid', () => { 
    
    const category = 'One Punch';


    test('Debe de mostrar el Loading... inicilalmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        

        render( <GifGrid category={ category } /> );
        screen.getByText('Cargando...');
        screen.getByText( category );
        
        // screen.debug();


     });


     test('debe de mostrar los items cuando se cargan las imagenes mediante useFetchGif', () => { 
        

        const gifs = [
            {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
            },

            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });


        render( <GifGrid category={category} /> );
        expect( screen.getAllByRole('img').length ).toBe(2);


    });


 });









