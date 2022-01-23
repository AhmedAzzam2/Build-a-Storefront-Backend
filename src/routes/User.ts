import express, { Request, Response } from 'express';
import { UserSouq,User } from '../models/user'; 
// import verifyAuthToken from '../middleware/verifyauthtoken';


const onen = new UserSouq();

const index = async (_req: Request, res: Response) => {
  try{
   const Users = await onen.index();
   
    res.json(Users);
} catch (err) {
 res.status(400);  
 res.json(err);
  }
}

const show = async (req: Request, res: Response) => {
    const User = await onen.show(req.params.id);
    res.json(User)
}

const create = async (req: Request, res: Response) => {
    try {
        const User0: User = {
            id:  req.body.id,
            firstName:  req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone:req.body.phone,
            password:req.body.password,
        };
        console.log(req.body);
        
        const newUser = await onen.create(User0);
        res.json(newUser)
        console.log(newUser)
    } catch(err) {
        console.log(err)
        res.status(400);
        res.json(err);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const User0: User = {
            id:  req.body.id,
            firstName:  req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone:req.body.phone,
            password:req.body.password,
        };
        console.log(req.body);
        
        const newUser = await onen.updateUser(User0);
        res.json(newUser)
        console.log(newUser)
    } catch(err) {
        console.log(err)
        res.status(400);
        res.json(err);
    }
};


const delUser = async (req: Request, res: Response) => {
    const deleted = await onen.delete(req.body.id)
    res.json(deleted)
}

// const User_routes = (app: express.Application) => {
//     app.get('/Users', index);
//     app.get('/Users/:id', show);
//     app.post('/Users', verifyAuthToken, create);
//     app.delete('/Users', verifyAuthToken, delUser);
// };

const User_routes = (app: express.Application) => {
  app.get('/Users', index);
  app.get('/Users/:id', show);
  app.post('/Users', create);
  app.patch('/Users', update);
  app.delete('/Users', delUser);
};
export default User_routes;