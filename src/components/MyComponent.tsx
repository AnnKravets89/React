import type {FC} from "react";
import './MyComponent.css'
type MyComponentPropType = {text: string};
const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        <div className={'target'}>
            {text}
        </div>
    );
};

export default MyComponent;



// import type {FC} from "react";
//
// type MyComponentPropType = {text: string};
// const MyComponent: FC<MyComponentPropType> = ({text})=> {
//     return <div>{text}</div>
// }
// export default MyComponent;
