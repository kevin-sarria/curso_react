import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewValue }) => {
  
    const [inputValue, setInputValue] = useState('')
  
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length <= 1 ) { return; }
        //setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
        onNewValue(inputValue.trim());
    }

  
    return (
    <form onSubmit={ onSubmit } aria-label = "form" >
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired
}


