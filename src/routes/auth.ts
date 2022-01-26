import express, { Request, Response,NextFunction } from 'express';
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const jwt = require('jsonwebtoken');

// function authenticateToken(req: Request, res: Response, next:NextFunction) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
// console.log(authHeader);

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.TOKEN_SECRET as string , (err: any, user: any) => {
//     console.log(err)

//     if (err) return res.sendStatus(403)
    
//     console.log(user+'4444444444444' as string);


//     next()
//   })
// }

// const token_secret = process.env.TOKEN_SECRET!;



const token_secret = process.env.TOKEN_SECRET!;

// created function for check token access 
export const getUser = (req: Request, res: Response) => {

    const token = req.headers['authorization'] 
   const tk= jwt.verify(token, token_secret)
    console.log(tk.user.id);console.log('zzzzzzzzz');
    
}

// created function for check token access 
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        // get token from hader
        const token = req.headers['authorization']
        // const token = authHeader && authHeader.split(' ')[1]
        // console.log(token);
        
       const tk= jwt.verify(token, token_secret)
        console.log(tk);console.log('zzzzzzzzz');
        
        
        next();
    } catch (error) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
}

// export default verifyAuthToken

export default authenticateToken