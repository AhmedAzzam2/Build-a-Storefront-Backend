import express, { Request, Response } from 'express';
import { UserSouq, User } from '../models/user';
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var 
import jwt from 'jsonwebtoken'

const onen = new UserSouq();

export const index = async (_req: Request, res: Response) => {
    try {
        const Users = await onen.index();
        res.json(Users);

    } catch (error) {
    }

}

export const show = async (req: Request, res: Response) => {
    try {
        const User = await onen.show(req.params.id);
        res.json(User)
    } catch (error) {
        res.send(400)
    }
}
export const create = async (req: Request, res: Response) => {
    try {
        const hash = bcrypt.hashSync(req.body.password + process.env.BCRYPT_PASSWORD as string, parseInt(process.env.SALT_ROUNDS as string));
        const User0: User = {
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: hash
        };
        console.log(req.body);

        const newUser = await onen.create(User0);
        var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.json(token)
        console.log(token)

    } catch (error) {
        res.send(400)
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const hash = bcrypt.hashSync(req.body.password + process.env.BCRYPT_PASSWORD as string, parseInt(process.env.SALT_ROUNDS as string));
        const User0: User = {
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: hash,
        };
        console.log(req.body);

        const newUser = await onen.updateUser(User0);
        var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.json(token)
        console.log(newUser)
    } catch (error) {
        res.send(400)
    }
};


export const delUser = async (req: Request, res: Response) => {
    try {
        const deleted = await onen.delete(req.body.id)
        res.json(deleted)
    } catch (error) {
        res.send(400)
    }
}