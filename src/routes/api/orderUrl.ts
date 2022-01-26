import express, { Request, Response } from 'express';
import { index,show,create,update,delOrder } from '../order';
import authenticateToken from '../auth';

const Order_routes = (Router: express.Router) => {
    Router.get('/Orders', authenticateToken, index);
    Router.get('/Orders/:id', authenticateToken, show);
    Router.post('/Orders', authenticateToken, create);
    Router.patch('/Orders', authenticateToken, update);
    Router.delete('/Orders', authenticateToken, delOrder);
};

export default Order_routes;
