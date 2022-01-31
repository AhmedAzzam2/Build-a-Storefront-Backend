import express, { Request, Response } from 'express';
import { productSouq, product } from '../models/product';

// create new obj form productSouq
const onen = new productSouq();
// create fun route for home api products 
export const index = async (_req: Request, res: Response) => {

        // wait res fun for get all products  
        const products = await onen.index();
        // result all products  as json
        res.json(products);
  
}
// show single page product api
export const show = async (req: Request, res: Response) => {
    // put id product for get info
    const product = await onen.show(req.params.id);
    // result info as json
    res.json(product)
}
// makeed created product by form or api
export const create = async (req: Request, res: Response) => {
    // get all data for create fun 
        const productNew: product = { 
            name: req.body.name,
            price: req.body.price,
        };
        // check req.body before send to database 
        console.log(req.body);
        // send to database
        const newproduct = await onen.create(productNew);
        res.json(newproduct)
        // check newproduct after send to database 
        console.log(newproduct) 
};
// update product
export const update = async (req: Request, res: Response) => {
    // get all data for update fun 
        const productNew: product = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
        };
        // check req.body before send to database 
        console.log(req.body);
        // send to database
        const newproduct = await onen.updateproduct(productNew);
        res.json(newproduct)
        // check newproduct after send to database 
        console.log(newproduct) 
};

// fun delete product by id
export const delproduct = async (req: Request, res: Response) => {
    // del product by id
    const deleted = await onen.delete(req.body.id)
    // send data as json
    res.json(deleted)
}