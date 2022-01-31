import express, { Request, Response } from 'express'
import cors from 'cors'
import client from './database'
import User_routes from './routes//api/userUrl'
import product_routes from './routes/api/productsUrl'
import order_products_routes from './routes/api/orderUrl'
import {productSouq,product} from './models/product'
import {order_productsSouq,order_products} from './models/order'
import Pool from './database'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"


//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main product folder
// app.use(express.static('website'));



// let bk =new productSouq()

// client.connect().then(
//     (db)=>{
//         return db.query('SELECT from products ', (err, res) => {
//           console.log(err, res.rows) 
//         })
        
//     }
// )



// app.post('/', function (req: Request, res: Response) {
//     bk.create(req.body) 
//     res.json( {data:req.body} )
// })

 

product_routes(app);
User_routes(app);
order_products_routes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
