import React from 'react'

//create a function class (arrow function)
const Todos = ({todos, deleteTodo}) => {

    
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="list-group" key={todo.id}>
                    <a href="#" onClick={()=>{deleteTodo(todo.id)}}
                     className="list-group-item list-group-item-action list-group-item-primary">
                        {todo.content}
                    </a>
                </div>

            )
        })
    ) : (<p>There is no schedule today</p>);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 d-grid gap-3">
                    {todoList}
                </div>
            </div>  
        </div>
    )
}

export default Todos
