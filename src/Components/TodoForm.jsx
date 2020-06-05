import React, { Component } from 'react'
import axios from 'axios'

export default class TodoForm extends Component {

    state = {

        title:'',
        body:''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/v1/todos', this.state)
        .then(res => {
            
           const newTodo = this.state
           this.props.createTodo(newTodo)
           
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err);
        });
    }  


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState( {[name]: value })
    
    };
    
    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" name="title" placeholder="title" onChange={(e) => this.handleChange(e)}/>
                    <input type="text" name="body" placeholder="description" onChange={(e) => this.handleChange(e)}/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}


