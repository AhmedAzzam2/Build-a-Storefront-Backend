import express, { Request, Response } from 'express';
import { index, show, create, update, delUser } from '../User';
import authenticateToken from '../auth';


const User_routes = (app: express.Application) => {
    app.get('/Users', authenticateToken, index);
    app.get('/Users/:id', authenticateToken, show);
    app.post('/Users', create);
    app.patch('/Users', authenticateToken, update);
    app.delete('/Users', authenticateToken, delUser);
};
export default User_routes;