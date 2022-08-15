import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {

    const num = 123;

    test('debe de hacer un match con el snapshot', () => { 
        
        const { container } = render(
            <CounterApp 
                value= { num }
            />
        );

        expect(container).toMatchSnapshot();
     });


     test('Debe de mostrar el valor inicial de 100', () => { 
        
        render(
            <CounterApp 
                value= { 100 }
            />
        );

        expect(screen.getByText('100')).toBeTruthy();

      });



      test('Debe de incrementar con el boton +1', () => { 
        
        render( <CounterApp value= { num }/> );

        fireEvent.click(screen.getByText('+1'))

        expect( screen.getByText('124') ).toBeTruthy();


       });


       test('Debe de decrementar con el boton -1', () => { 
        
        render( <CounterApp value= { num }/> );

        fireEvent.click(screen.getByText('-1'));

        expect( screen.getByText('122') ).toBeTruthy();


       });


    test('Debe de funcionar el boton de reset', () => { 
        
        render( <CounterApp value= { 1000 }/> );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));


        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        // fireEvent.click(screen.getByText('Reset'));

        screen.debug();


        expect( screen.getByText(1000) ).toBeTruthy();


     });


});



