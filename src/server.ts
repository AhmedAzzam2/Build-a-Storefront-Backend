import express, { Request, Response } from 'express'
import cors from 'cors'
import client from './database'
import User_routes from './routes/User'
import Book_routes from './routes/books'
import Order_routes from './routes/order'
import {BookSouq,Book} from './models/book'
import {OrderSouq,Order} from './models/order'
import Pool from './database'
// import booksRoute from '../routes/books'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"


//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));



let bk =new BookSouq()

client.connect().then(
    (db)=>{
        return db.query('SELECT from books', (err, res) => {
          console.log(err, res.rows) 
        })
        
    }
)



// app.post('/', function (req: Request, res: Response) {
//     bk.create(req.body) 
//     res.json( {data:req.body} )
// })

 

Book_routes(app);
User_routes(app);
Order_routes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
