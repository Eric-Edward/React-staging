import React, {Component} from 'react'
import PropTypes from "prop-types";
import './index.css'

export default class index extends Component {

    static propTypes = {
        changeTodo: PropTypes.func.isRequired,
        delTodo: PropTypes.func.isRequired
    }

    state = {mouse: false};

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag});
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.changeTodo(id, event.target.checked);
        }
    }

    handleDel = (id) => {
        return () => {
            if (window.confirm('确定删除吗？')) {
                this.props.delTodo(id);
            }
        }
    }

    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDel(id)} className="btn btn-danger"
                        style={{display: mouse ? 'block' : 'none'}}>删除
                </button>
            </li>
        )
    }
}
