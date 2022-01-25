import express, { Request, Response } from 'express';
import { BookSouq,Book } from '../models/book'; 
import authenticateToken from './auth';
// import verifyAuthToken from '../middleware/verifyauthtoken';


const onen = new BookSouq();

const index = async (_req: Request, res: Response) => {
  try{
   const Books = await onen.index();
   
    res.json(Books);
} catch (err) {
 res.status(400);  
 res.json(err);
  }
}

const show = async (req: Request, res: Response) => {
    const Book = await onen.show(req.params.id);
    res.json(Book)
}

const create = async (req: Request, res: Response) => {
    try {
        const Book0: Book = {
            id:  req.body.id,
            title:  req.body.title,
            author: req.body.author,
            totalPages: req.body.totalPages,
            summary:req.body.summary,
        };
        console.log(req.body);
        
        const newBook = await onen.create(Book0);
        res.json(newBook)
        console.log(newBook)
    } catch(err) {
        console.log(err)
        res.status(400);
        res.json(err);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const Book0: Book = {
            id:  req.body.id,
            title:  req.body.title,
            author: req.body.author,
            totalPages: req.body.totalPages,
            summary:req.body.summary,
        };
        console.log(req.body);
        
        const newBook = await onen.updateBook(Book0);
        res.json(newBook)
        console.log(newBook)
    } catch(err) {
        console.log(err)
        res.status(400);
        res.json(err);
    }
};


const delBook = async (req: Request, res: Response) => {
    const deleted = await onen.delete(req.body.id)
    res.json(deleted)
}

// const Book_routes = (app: express.Application) => {
//     app.get('/Books', index);
//     app.get('/Books/:id', show);
//     app.post('/Books', verifyAuthToken, create);
//     app.delete('/Books', verifyAuthToken, delBook);
// };

const Book_routes = (app: express.Application) => {
  app.get('/Books',authenticateToken, index);
  app.get('/Books/:id',authenticateToken, show);
  app.post('/Books',authenticateToken, create);
  app.patch('/Books',authenticateToken, update);
  app.delete('/Books',authenticateToken, delBook);
};
export default Book_routes;