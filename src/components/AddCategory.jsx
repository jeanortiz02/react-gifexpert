
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {{
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }}

    const onSubmit = (e) =>{
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        // setCategory( categories => [inputValue, ...categories]);
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>  
        <input 
            type="text"
            placeholder="Buscar un Gif"
            value={inputValue}
            onChange={ onInputChange}
        />
    </form>
  )
}
