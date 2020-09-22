import {v4 as uuidv4} from 'uuid';

const users = [
    
]

export const createUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});
    res.send(`User added successfully`)
}

export const getUsers = (req, res) => {
    res.send(users)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const newUsers = users.filter((x) => x.id !== id)
    res.send(newUsers);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, age} = req.body;
    let userToBeUpdated = users.find((user) => user.id === id)

    if(name) userToBeUpdated.name = name;
    if(age) userToBeUpdated.age = age;
    if(email) userToBeUpdated.email = email;

    res.send(userToBeUpdated);

}

export const getUser = (req, res) => {
    const singleUser = users.filter((x) => x.id === req.params.id);
    res.send(singleUser)
}