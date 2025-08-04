import './CoursesComponent.css';
import {coursesArray} from "../../data/arrays.ts";
import type {ICourse} from "../../models/CourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";



export const CoursesComponent = () => {
    return (
        <div className={"courses-container"}>
            {
               coursesArray.map((course: ICourse, index) => {
                   return <CourseComponent key={index} course={course}/>
               })
            }
        </div>

    );
};
