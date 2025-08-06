import './Todos.css';
import {useEffect, useState} from "react";
import type {ITodoModel} from "../../models/TodoModel.ts";
import {loadTodos} from "../../services/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodoModel[]>([]);
    useEffect(() => {

        async function fetchTodos() {
            const allTodos = await loadTodos();
            setTodos(allTodos);
        }
        fetchTodos();

    }, []);

    return (
        <div className={"todos flex flex-col gap-4"}>
            {
                todos.map((todo) =>( <Todo key={todo.id} todo={todo}/>))
            }
        </div>
    );
};
