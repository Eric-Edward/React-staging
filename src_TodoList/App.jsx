import React, {Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'


import './App.css'

export default class App extends Component {

    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '敲代码', done: false}
        ]
    };

    addTodo = (data) => {
        this.setState({todos: [data, ...this.state.todos]})
    }

    changeTodo = (id, done) => {
        const {todos} = this.state;
        const newtodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, done: done}
            } else return todo;
        })
        this.setState({todos: newtodos});
    }

    delTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({todos: newTodos});
    }

    checkAllTodo = (flag) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            return {...todo, done: flag};
        })
        this.setState({todos: newTodos});
    }

    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return !todo.done;
        })
        this.setState({todos: newTodos});
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} delTodo={this.delTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
