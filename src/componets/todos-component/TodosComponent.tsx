import './TodosComponent.css';
import {useEffect, useState} from "react";
import type {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos()
            .then(value => setTodos(value));
    }, []);

    return (
        <div className={"todos-container flex flex-col gap-4"}>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};
