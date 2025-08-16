import {type FC, memo} from "react";

const User: FC<{foo:()=> void}> = memo(() => {
    console.log('user')
    return (
        <div>
            user component
        </div>
    );
});

export default User;
