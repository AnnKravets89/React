import './Todo.css';
import type {ITodoModel} from "../../models/TodoModel.ts";
import type {FC} from "react";

type PropsTodoType = {todo: ITodoModel}

export const Todo: FC<PropsTodoType> = ({todo}) => {
    return (
        <>
            <div className={"flex todo"}>
                <ol>
                    <li>
                        {todo.id}{'.'} {todo.title}
                    </li>
                </ol>
                <ul>
                    {todo.completed.toString()}
                </ul>
            </div>
        </>
    );
};
