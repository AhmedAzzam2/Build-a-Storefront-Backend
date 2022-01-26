import express, { Request, Response } from 'express';
import { index,show,create,update,delBook } from '../books';
import authenticateToken from '../auth';

const Book_routes = (Router: express.Router) => {
    Router.get('/Books', authenticateToken, index);
    Router.get('/Books/:id', authenticateToken, show);
    Router.post('/Books', authenticateToken, create);
    Router.patch('/Books', authenticateToken, update);
    Router.delete('/Books', authenticateToken, delBook);
};
export default Book_routes;
