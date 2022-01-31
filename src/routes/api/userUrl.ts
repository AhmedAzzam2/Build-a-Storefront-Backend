import express, { Request, Response } from 'express';
import { index, show, create, update, delUser } from '../User';
import authenticateToken from '../auth';


const User_routes = (app: express.Application) => {
    app.get('/users', authenticateToken, index);
    app.get('/users/:id', authenticateToken, show);
    app.post('/users', create);
    app.patch('/users', authenticateToken, update);
    app.delete('/users', authenticateToken, delUser);
};
export default User_routes;