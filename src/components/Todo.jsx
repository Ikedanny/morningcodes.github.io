import React, { Component } from 'react'
import Todos from './Todos';
import AddTodo from './AddTodo';
import './TodoStyle.css'

class Todo extends Component {

    //creat a state
    state={
        todos:[
            {id:1, content:'Buy Pen'},
            {id:2, content:'Buy Vegitable'}
        ]
    }

    //creating an addTodo using an arrow function
    addTodo=(todo)=>{
        todo.id = Math.random();
        let todos = [todo,...this.state.todos];
        this.setState({
            todos:todos
        })
    }

    //deleTodo using an arrow function
    deleteTodo=(id)=> {
        const todos = this.state.todos.filter(todo=>{
            return todo.id != id
        });

        this.setState({
            todos:todos
        })
    }

    
    render() {
        return (
            
            <div className="d-grid gap-3" id="border">

            
                <h3 className="text-center">Daily Todo schedule</h3>

                <AddTodo  addTodo={this.addTodo}/>
            
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                
            </div>
        )
    }
}

export default Todo  
