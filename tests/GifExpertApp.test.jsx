import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />', () => { 
    
    test('Debe hacer match con el snapshot', () => {
        
        const { container } = render( <GifExpertApp /> );
        expect(container).toMatchSnapshot();

    });

    test('Debe añadir una categoría', () => {
 
        render( <GifExpertApp />);
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
       
        fireEvent.input( input, { target: { value:  'Iroman'} } );
        fireEvent.submit( form );
        
        expect( screen.getByText('Iroman') ).toBeTruthy();
    });


});