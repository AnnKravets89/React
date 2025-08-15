import {useEffect} from "react";
import {loadAuthProducts} from "../../services/api.service.ts";

const AuthResources = () => {

    useEffect(() => {
        loadAuthProducts


    }, []);

    return (
        <div>

        </div>
    );
};

export default AuthResources;
