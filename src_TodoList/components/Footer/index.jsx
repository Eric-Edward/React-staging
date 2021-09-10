import React, {Component} from 'react'
import './index.css'


export default class Footer extends Component {

    handleCheckAll = (event) => {
        return this.props.checkAllTodo(event.target.checked);
    }

    handleClearAllDone = () => {
        // const {todos} = this.props;
        // todos.map((todo) => {
        //     if (todo.done) return this.props.clearAllDone(todo.id);
        //     else return null;
        // })

        this.props.clearAllDone();
    }

    render() {
        const {todos} = this.props;
        const doneCountTodo = todos.reduce((acc, current) => acc + (current.done ? 1 : 0), 0);
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCountTodo === total && total !== 0}
                           onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCountTodo}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>
                    清除任务已完成
                </button>
            </div>
        )
    }
}
