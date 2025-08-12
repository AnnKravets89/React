

export const getUsers = async (pg:string) => {
    return await fetch('https://reqres.in/api/users?page=' + pg)
        .then(res => res.json())


}
