import React, {useState} from "react";
import propTypes from "prop-types";

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function sabmitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form 
            className='addForm'
            onSubmit={sabmitHandler}>
            <input 
                className='addInput' 
                value={value}
                onChange={event => setValue(event.target.value)}
            />
           <button type='submit' className='addBtn'>Add todo</button>
       </form> 
    )
}

AddTodo.propTypes = {
    onCreate: propTypes.func.isRequired
}

export default AddTodo