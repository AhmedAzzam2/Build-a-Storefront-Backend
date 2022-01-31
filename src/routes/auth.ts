import express, { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const token_secret = process.env.TOKEN_SECRET!;

// created function for check token access 
export const getUser = (req: Request, res: Response) => {

    const token = req.headers['authorization']
    const tk = jwt.verify(token, token_secret)
    console.log(tk.user.id); console.log('zzzzzzzzz');

}

// created function for check token access 
const authenticateToken = (req: Request, res: Response, next: NextFunction) => { 
    try {
        
        // get token from hader
        const token = req.headers['authorization']
        // const token = authHeader && authHeader.split(' ')[1]
        // console.log(token);
        const tk = jwt.verify(token, token_secret)
        console.log(tk); console.log('zzzzzzzzz');
        next();
    } catch (error) {
        res.send(400)
    }
}

export default authenticateToken