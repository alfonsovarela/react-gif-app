import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    
    // useState para ver que va escribiendo el usuario
    const [inputValue, setInputValue] = useState('Hola Mundo');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // validacion en el submit
        if (inputValue.trim().length > 2) {
            setCategories( categories => [ inputValue, ...categories, ]);
        }
        
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text" 
                value= {inputValue} 
                onChange= { handleInputChange } 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
