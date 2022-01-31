import express, { Request, Response } from 'express';
import { index,show,create,update,delorder_products, Ordercreate } from '../order';
import authenticateToken from '../auth';

const order_products_routes = (Router: express.Router) => {
    Router.get('/orders', authenticateToken, index);
    Router.get('/orders/:id', authenticateToken, show);
    Router.post('/orders', authenticateToken, create);
    Router.patch('/orders', authenticateToken, update);
    Router.delete('/orders', authenticateToken, delorder_products);
    Router.post('/orders/:id/products', Ordercreate)
};

export default order_products_routes;
