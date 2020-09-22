import express from 'express';
import { createUser, getUsers, deleteUser, updateUser, getUser } from '../controllers/users.js'

const usersRoute = express.Router();

usersRoute.get('/', getUsers);
usersRoute.post('/', createUser)
usersRoute.get('/:id', getUser)
usersRoute.delete('/:id', deleteUser)
usersRoute.patch('/:id', updateUser)

/**
 * export URL routes
 */
export default usersRoute;