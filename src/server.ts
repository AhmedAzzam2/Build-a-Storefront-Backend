import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import {BookStore,Book} from './models/book'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())


const book = new BookStore()
type fr = {
     id: number;
     title: string;
     author: string;
     totalPages: number;
     summary: string;
}
let hui = fr
app.get('/', function (req: Request, res: Response) {

    book.create('Hello','hu',41,'ygi')
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
