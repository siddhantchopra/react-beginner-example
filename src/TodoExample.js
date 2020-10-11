import React,{ useState, useReducer } from 'react'
import {Todo} from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo)=> {
            if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete}
            }
            return todo
        })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default :
            return todos
    }
}

const newTodo=(name)=>{
    return {id: Date.now(), name, complete: false}
}
 const TodoExample = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
   
const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:ACTIONS.ADD_TODO, payload: {name} })
    setName('')
}
    return (
               <div className="container">
                   <h3>React Hooks (useReducer)</h3>
                <div className="columns">
                    <div className="column is-9">
                        <div className="columns">
                            <div className="column is-6">
                                <div className="card events-card inverted">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Todo List
                                        </p>
                                    </header>
                                    <div className="card-table">
                                        <div className="content">
                                            <table className="table is-fullwidth is-striped">
                                                <tbody>
                                                    {
                                                         todos.map((todo)=> 
                                                                     <Todo key={todo.id} todo={todo} dispatch={dispatch}/>)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="card inverted">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            User Todo items
                                        </p>
                                       
                                    </header>
                                    <div className="card-content">
                                        <div className="content">
                                            <div className="control has-icons-left has-icons-right">
                                                   <form onSubmit={handleSubmit}>
             <input className="input is-large" type="text" value={name} onChange={e => setName(e.target.value)}/>
      </form>
                                               
                                                <span className="icon is-medium is-left">
                              <i className="fa fa-search"></i>
                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
       
    )
}

export default TodoExample
