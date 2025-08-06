import './TodosComponent.css';
import {useEffect, useState} from "react";
import {getsTodos} from "../../services/api.service.ts";
import type {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getsTodos().then(value => setTodos(value));

    }, []);

    return (
        <div>
            {
                todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
            }

        </div>
    );
};
