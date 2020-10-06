import React from 'react'
import { ACTIONS } from './TodoExample'

export const Todo = ({ todo, dispatch }) => {
    return (
        <tr>
            <td width="5%"><i class="fa fa-bell-o"></i></td>
            <td><span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span></td>
            <td class="level-right"> <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button></td>
            <td class="level-right"> <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button></td>
        </tr>
      
    )
}
