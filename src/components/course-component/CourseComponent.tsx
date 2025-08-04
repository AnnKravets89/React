import './CourseComponent.css';
import type {ICourse} from "../../models/CourseModel.ts";
import * as React from "react";

type PropsType = {
    course: ICourse;
}

export const CourseComponent: React.FC<PropsType> = ({course}) => {
    return (
        <div className={"course-container"}>
            <h2>
                {course.title}
            </h2>
            <div className={"course-duration"}>
                <p>
                    <span>{course.monthDuration}</span> {"months"}
                </p>
                <p>
                    <span>{course.hourDuration}</span> {"hours"}
                </p>
            </div>
                <ul className={'list-disc'}>
                    {
                        course.modules.map((module, index) => (
                            <li key={index}>
                                {module}
                            </li>
                        ))
                    }
                </ul>
        </div>
    );
};
