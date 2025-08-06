import './Todos.css';
import {useEffect, useState} from "react";
import type {ITodoModel} from "../../models/TodoModel.ts";
import {loadTodos} from "../../services/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodoModel[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, []);

    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};
