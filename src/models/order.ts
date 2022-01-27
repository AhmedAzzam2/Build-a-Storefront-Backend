// conn database
import Client from '../database'
// make type  for models
export type Order = {
     id: number;
     quantity: number;
     user_id: string;
     books_id: string;
     status: string;
}
let id:string
// make class models 
export class OrderSouq {
  // function get all  order for user_id
  async index(): Promise<Order[]> {
      // get all order for user_id 
      const conn = await Client.connect()
      // const sql = 'SELECT * FROM order_books'
      const sql = `SELECT * FROM books 
      INNER JOIN order_books ON books.id = order_books.books_id 
      INNER JOIN users ON users.id = order_books.user_id 
      order by order_books.books_id asc;`
    // user_id bigint REFERENCES users(id) NOT NULL,
    // books_id bigint REFERENCES books(id) NOT NULL,

    const result = await conn.query(sql )
    // conn database release
      conn.release()
      console.log(result.rows);
      
      return result.rows 
  }
// fun show book by id
  async show(id: string): Promise<Order> {
    const sql = 'SELECT * FROM order_books WHERE id=($1)'
    // conn database
    const conn = await Client.connect()
    // query data info
    const result = await conn.query(sql, [id])
    // conn database release
    conn.release()
    // return show book
    return result.rows[0]
  }
// make create fun INSERT INTO order_books
  async create(a: Order): Promise<Order> {
    const sql = 'INSERT INTO order_books (quantity, user_id, books_id,status ) VALUES($1, $2, $3, $4) RETURNING *'
    // conn database
    const conn = await Client.connect()
    // query data
    const result = await conn
        .query(sql, [a.quantity, a.user_id, a.books_id,a.status ])

    const order = result.rows[0]
    // conn database release
    conn.release()
    // return data order
    return order
  }


  async updateOrder(a: Order): Promise<Order> {
      
      const sql = `UPDATE order_books 
                  SET quantity=$1, user_id=$2, books_id=$3,status=$4
                  WHERE id=$5 
                  RETURNING *`

  // conn database
  const conn = await Client.connect()

  const result = await conn
      .query(sql, [a.quantity, a.user_id, a.books_id,a.status, a.id])

  const order = result.rows[0]

  conn.release()

  return order
}

  async delete(id: string): Promise<Order> {
    const sql = 'DELETE FROM order_books WHERE id=($1)'
    // conn database
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const order = result.rows[0]

    conn.release()

    return order
  }
}

