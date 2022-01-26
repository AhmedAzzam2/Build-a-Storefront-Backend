import express, { Request, Response,NextFunction } from 'express';
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const jwt = require('jsonwebtoken');

import { OrderSouq,Order } from '../models/order'; 
import authenticateToken from './auth'; 

let bcrypt = require('bcrypt')
const onen = new OrderSouq();

export const index = async (_req: Request, res: Response) => {
  try{
   const Orders = await onen.index();
   
    res.json(Orders);
} catch (err) {
 res.status(400);  
 res.json(err);
  }
}
 

export const show = async (req: Request, res: Response) => {
    const Order = await onen.show(req.params.id);
    res.json(Order)
}

export const create = async (req: Request, res: Response) => {  
        const token = req.headers['authorization'] 
       const tk= jwt.verify(token, process.env.TOKEN_SECRET!)
        
        const Order0: Order = {
            id:  req.body.id,
            quantity:  req.body.quantity,
            user_id: tk.user.id,
            books_id: req.body.books_id,
            status:req.body.status,
        };
        console.log(req.body);
        
        const newOrder = await onen.create(Order0);
        res.json(newOrder)
        console.log(newOrder) 
};

export const update = async (req: Request, res: Response) => { 
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
};


export const delOrder = async (req: Request, res: Response) => {
    const deleted = await onen.delete(req.body.id)
    res.json(deleted)
}
