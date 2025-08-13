import {useEffect} from "react";
import {getAllUsers, saveUser} from "./services/user.service.ts";

function App() {
    useEffect(() => {

        getAllUsers().then(value => console.log(value));

        saveUser({id: 11, name: 'John', email: 'examle@email.com'}).then(value => console.log(value));
    }, []);

  return (
    <>


    </>
  )
}

export default App
