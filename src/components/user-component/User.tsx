import {memo} from "react";

const User = memo(() => {
    console.log('user')
    return (
        <div>
            user component
        </div>
    );
});

export default User;
