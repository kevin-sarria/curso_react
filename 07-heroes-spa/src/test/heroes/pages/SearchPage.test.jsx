import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../heroes/pages/SearchPage';


describe('Pruebas en <SearchPage />', () => {
   
    test('Debe de mostrarse correctamente con valores por defecto', () => {

        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        screen.debug();

    });

});