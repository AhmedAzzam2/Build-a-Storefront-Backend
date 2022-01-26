import express, { Request, Response } from 'express';
import { BookSouq, Book } from '../models/book';

// create new obj form BookSouq
const onen = new BookSouq();
// create fun route for home api books
export const index = async (_req: Request, res: Response) => {

        // wait res fun for get all books 
        const Books = await onen.index();
        // result all books as json
        res.json(Books);
  
}
// show single page book api
export const show = async (req: Request, res: Response) => {
    // put id book for get info
    const Book = await onen.show(req.params.id);
    // result info as json
    res.json(Book)
}
// makeed created book by form or api
export const create = async (req: Request, res: Response) => {
    // get all data for create fun 
        const BookNew: Book = {
            id: req.body.id,
            title: req.body.title,
            author: req.body.author,
            total_pages: req.body.total_pages,
            price: req.body.price,
            summary: req.body.summary,
        };
        // check req.body before send to database 
        console.log(req.body);
        // send to database
        const newBook = await onen.create(BookNew);
        res.json(newBook)
        // check newbook after send to database 
        console.log(newBook) 
};
// update book
export const update = async (req: Request, res: Response) => {
    // get all data for update fun 
        const BookNew: Book = {
            id: req.body.id,
            title: req.body.title,
            author: req.body.author,
            total_pages: req.body.total_pages,
            price: req.body.price,
            summary: req.body.summary,
        };
        // check req.body before send to database 
        console.log(req.body);
        // send to database
        const newBook = await onen.updateBook(BookNew);
        res.json(newBook)
        // check newbook after send to database 
        console.log(newBook) 
};

// fun delete book by id
export const delBook = async (req: Request, res: Response) => {
    // del book by id
    const deleted = await onen.delete(req.body.id)
    // send data as json
    res.json(deleted)
}