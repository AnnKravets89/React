import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const Some = () => {

    const [query, setQuery] = useSearchParams();
    useEffect(() => {

        const pg = query.get('pg');
        fetch('https://reqres.in/api/users?page=' + pg)
            .then(value => value.json())
            .then(value => {
                console.log(value);
            })
    }, [query]);
    return (
        <div>

        </div>
    );
};

export default Some;
