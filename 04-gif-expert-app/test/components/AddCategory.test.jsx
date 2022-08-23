import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => { 
    
    test( 'Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewValue={ () => {} } /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'saitama' } } );

        expect( input.value ).toBe( 'saitama' );

        // screen.debug();

    });


    test( 'Debe de llamar onNewValue si el input tiene un valor', () => {

        const inputValue = 'saitama';
        const onNewValue = jest.fn();


        render( <AddCategory onNewValue={ onNewValue } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect(input.value).toBe('');

        expect( onNewValue ).toHaveBeenCalled();
        expect( onNewValue ).toHaveBeenCalledTimes(1);
        expect( onNewValue ).toHaveBeenCalledWith( inputValue );

        // screen.debug();
    });

    test('No debe de llamar el onNewValue si el valor del input esta vacio', () => { 
       
        const inputValue = '';
        const onNewValue = jest.fn();


        render( <AddCategory onNewValue={ onNewValue } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

    
        expect( onNewValue ).not.toHaveBeenCalled();


    });

 });




