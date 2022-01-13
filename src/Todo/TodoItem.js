import React, {useContext} from 'react'
import propTypes from 'prop-types'
import Context from '../Context'

function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li className='addLi'>
            <span className={classes.join(' ')}>
                <input className='checkLi'
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)} 
                />            
                <strong className='st'>{index + 1}</strong>
                {todo.title}
            </span>
            <button className='rm' onClick={removeTodo.bind(null, todo.id)}>Delete</button>       
        </li>
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number,
    onChange: propTypes.func.isRequired
}

export default TodoItem