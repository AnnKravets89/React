import {useContext} from "react";
import {MyContext} from "../contex/MyContext.tsx";

const RightBranchA = () => {
    const {counterValue, increment} =
    useContext(MyContext);
    return (
        <div>
            RightBranchA
            <button onClick={() => {
                increment(counterValue);
            }}>
                Click me to increment counter in LBA
            </button>
        </div>
    );
};

export default RightBranchA;
