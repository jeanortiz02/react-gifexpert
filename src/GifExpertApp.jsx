import {useState} from 'react'
import { AddCategory, GiftGrid } from  './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One punch']);

  const onNewCategory = (onNewCategory) => {

    // Validacion
    if (categories.includes(onNewCategory)) return;
    
    setCategories([ onNewCategory, ...categories, ]);

  }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
          // setCategory ={setCategories}
            onNewCategory = {onNewCategory}
        />
          {
            categories.map( (category) => (
                <GiftGrid 
                  key={category}
                  category={category}
                />
              ))
          }
    </>
  )
}
