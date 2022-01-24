import express, { Request, Response } from 'express';
import { OrderSouq,Order } from '../models/order'; 
let bcrypt = require('bcrypt')
const onen = new OrderSouq();

const index = async (_req: Request, res: Response) => {
  try{
   const Orders = await onen.index();
   
    res.json(Orders);
} catch (err) {
 res.status(400);  
 res.json(err);
  }
}
 

const show = async (req: Request, res: Response) => {
    const Order = await onen.show(req.params.id);
    res.json(Order)
}
const create = async (req: Request, res: Response) => {
    try {
        const Order0: Order = {
            id:  req.body.id,
            quantity:  req.body.quantity,
            user_id: req.body.user_id,
            books_id: req.body.books_id,
            status:req.body.status,
        };
        console.log(req.body);
        
        const newOrder = await onen.create(Order0);
        res.json(newOrder)
        console.log(newOrder)
    } catch(err) {
        console.log(err)
        res.status(400);
        res.json(err);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const Order0: Order = {
            id:  req.body.id,
            quantity:  req.body.quantity,
            user_id: req.body.user_id,
            books_id: req.body.books_id,
            status:req.body.status,
        };
        console.log(req.body);
        
        const newOrder = await onen.updateOrder(Order0);
        res.json(newOrder)
        console.log(newOrder)
    } catch(err) {
        console.log(err)
        res.status(400);
        res.json(err);
    }
};


const delOrder = async (req: Request, res: Response) => {
    const deleted = await onen.delete(req.body.id)
    res.json(deleted)
}

// const Order_routes = (app: express.Application) => {
//     app.get('/Orders', index);
//     app.get('/Orders/:id', show);
//     app.post('/Orders', verifyAuthToken, create);
//     app.delete('/Orders', verifyAuthToken, delOrder);
// };

const Order_routes = (app: express.Application) => {
  app.get('/Orders', index);
  app.get('/Orders/:id', show);
  app.post('/Orders', create);
  app.patch('/Orders', update);
  app.delete('/Orders', delOrder);
};
export default Order_routes;