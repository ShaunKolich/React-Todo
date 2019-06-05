
import React, { Component } from "react";
import App from '../../App'



const TodoForm = props => {
    return (
        <form>
            <input
                type="text"
                placeholder="Todo"
                value={prop.todo}
                name="todo"
                className="todoInput"
                onChange={prop.onchangeHandle}
            />

            <button>Add todo</button>
            <button>Clear Completed</button>
        </form>
    );
};
export default TodoForm
