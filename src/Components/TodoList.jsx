import React, { Component } from 'react'
import axios from 'axios'
import Todo from './Todo'
import TodoForm from './TodoForm';
export class TodoList extends Component {
    state = {
        Todos: null,
    };

    componentDidMount() {
        axios
            .get("http://localhost:4000/api/v1/todos")
            .then((response) => this.setState({ Todos: response.data }));
    }

    handleDelete(id){
       
        axios
        .delete(`http://localhost:4000/api/v1/todos/${id}`)
        .then((response) => console.log(response));
        this.componentDidMount()
    
    }

    addOneTodo =(newTodo)=>{
        const todosCopy = [...this.state.Todos]
        todosCopy.unshift(newTodo)
        this.setState({Todos: todosCopy})
      
    }
    render() {
        const todos = this.state.Todos

        return (
        <div className="todoList">
        <h1>Todo List</h1>
            {
                todos ?
                 <div>
                     {
                        this.state.Todos.map(todo => {
                            return (
                                <div key={todo._id} className="todo">
                                <Todo  {...todo}/>
                                <button onClick={()=>{this.handleDelete(todo._id)}}>X</button>
                                </div>
                            )
                        })
                    }
                </div>
                   : null
            }
            <TodoForm createTodo={this.addOneTodo}/>
        </div>
        )
    }
}

export default TodoList
