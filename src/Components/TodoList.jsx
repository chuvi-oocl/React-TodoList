import React, { Component } from 'react';
import TodoGeneratorContainer from '../Containers/TodoGeneratorContainer';
import TodoListGroupContainer from '../Containers/TodoListGroupContainer';

import '../App.css';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoListGroupContainer/>
                <TodoGeneratorContainer/>
            </div>
        )
    }
}