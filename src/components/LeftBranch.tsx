import LeftBranchA from "./LeftBranchA.tsx";
import {useMemo} from "react";

const LeftBranch = () => {
    const useMemo1 = useMemo(() => {

        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        return null;
    }, []);

    return (
        <div>
            LeftBranch
            <LeftBranchA/>
        </div>
    );
};

export default LeftBranch;
