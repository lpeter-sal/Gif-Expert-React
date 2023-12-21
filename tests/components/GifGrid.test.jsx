const { render, screen } = require('@testing-library/react');
const { GifGrid } = require('../../src/components/GifGrid');
const { useFetchGifs } = require('../../src/hooks/useFetchGifs');

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'Iroman';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category }/> );
        // screen.debug();

        expect(screen.getByText('Cargando...')) ;
        expect(screen.getByText( category ));

    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Iroman',
                url: 'https://localhost/iroman.jpg'
            },
            {
                id: 'ABCD',
                title: 'Superman',
                url: 'https://localhost/superman.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category={ category }/> );
        screen.debug(); 
        
        expect(screen.getAllByRole('img').length).toBe(2);

    });

});