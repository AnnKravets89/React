import {useEffect} from "react";
import {login} from "../../services/api.service.ts";

const Login = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });

    }, []);

    return (
        <div>

        </div>
    );
};

export default Login;
