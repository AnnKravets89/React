import './TodoComponent.css';
import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";

type PropTodoType = {todo: ITodo};

export const TodoComponent: FC<PropTodoType> = ({todo}) => {

    return (
        <div className={"flex todo-container"}>
            <ol>
                <li>
                    {todo.id}{'.'} {todo.title}
                </li>
            </ol>
            <ul>
                {todo.completed.toString()}
            </ul>
        </div>
    );
};
