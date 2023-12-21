import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        // setCategories(categories.concat('Valorant'));
        // setCategories([...categories, 'Valorant']);
        setCategories([newCategory, ...categories]);
    }


    const resetCategory = () => {
        setCategories([]);
    }

  return (
    <>

        <h1>GifExpertApp</h1>


        <AddCategory 
            onNewCategory={ (event) => onAddCategory(event)}
        />

        <button className='btn primary' onClick={resetCategory}>Reset</button>

        { 
            categories.map( (category) => (
                <GifGrid key={category} 
                category={category} />
            ))
        }



    </>
  )
}
