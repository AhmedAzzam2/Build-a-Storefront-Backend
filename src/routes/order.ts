import express, { Request, Response, NextFunction } from 'express';
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const jwt = require('jsonwebtoken');

import { order_productsSouq, order_products, order } from '../models/order';
import authenticateToken from './auth';

let bcrypt = require('bcrypt')
const onen = new order_productsSouq();

export const index = async (_req: Request, res: Response) => {
    try {
        const order_productss = await onen.index();

        res.json(order_productss);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}


export const show = async (req: Request, res: Response) => {
    res.send(400)
}

export const create = async (req: Request, res: Response) => {
    try {
        const token = req.headers['authorization']
        const tk = jwt.verify(token, process.env.TOKEN_SECRET!)

        const order_products0: order_products = {
            id: req.body.id,
            quantity: req.body.quantity,
            order_id: tk.user.id,
            product_id: req.body.product_id,
        };
        console.log(req.body);

        const neworder_products = await onen.create(order_products0);
        res.json(neworder_products)
        console.log(neworder_products)
    } catch (error) {
        res.send(400)
    }
};

export const update = async (req: Request, res: Response) => {
    try {

        const order_products0: order_products = {
            id: req.body.id,
            quantity: req.body.quantity,
            order_id: req.body.order_id,
            product_id: req.body.product_id,
        };
        console.log(req.body);

        const neworder_products = await onen.updateorder_products(order_products0);
        res.json(neworder_products)
        console.log(neworder_products)
    } catch (error) {
        res.send(400)
    }
};


export const delorder_products = async (req: Request, res: Response) => {
    try {

        const deleted = await onen.delete(req.body.id)
        res.json(deleted)
    } catch (error) {
        res.send(400)
    }
}

export const OrderCreate = async (req: Request, res: Response) => {
    try {
        const token = req.headers['authorization']
        const tk = jwt.verify(token, process.env.TOKEN_SECRET!)

        const order_products: order = {
            id: req.body.id,
            status: req.body.status,
            user_id: tk.user.id,
        };
        console.log(req.body);

        const neworder_products = await onen.ordercreate(order_products);
        res.json(neworder_products)
        console.log(neworder_products)
    } catch (error) {
        res.send(400)
    }
};