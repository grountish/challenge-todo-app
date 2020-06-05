import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        )
    }
}
