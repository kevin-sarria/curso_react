import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";


describe('Pruebas en <MainApp />', () => {
    
    test('Debe de mostrar el HomePage', () => {
        
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        screen.debug();

    });


});