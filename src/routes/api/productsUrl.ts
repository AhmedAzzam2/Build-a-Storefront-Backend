import express, { Request, Response } from 'express';
import { index,show,create,update,delproduct } from '../products';
import authenticateToken from '../auth';

const product_routes = (Router: express.Router) => {
    Router.get('/products', index);
    Router.get('/products/:id', show);
    Router.post('/products', authenticateToken, create);
    Router.patch('/products', authenticateToken, update);
    Router.delete('/products', authenticateToken, delproduct);
};
export default product_routes;
