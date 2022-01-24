// @ts-ignore
import Client from '../database'

export type Order = {
     id: number;
     quantity: number;
     user_id: string;
     books_id: string;
     status: string;
}

export class OrderSouq {
  async index(): Promise<Order[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM order_books'

      const result = await conn.query(sql)

      conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get order_books. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Order> {
    try {
    const sql = 'SELECT * FROM order_books WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find order ${id}. Error: ${err}`)
    }
  }

  async create(b: Order): Promise<Order> {
      try {
    const sql = 'INSERT INTO order_books (quantity, user_id, books_id,status ) VALUES($1, $2, $3, $4) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [b.quantity, b.user_id, b.books_id,b.status ])

    const order = result.rows[0]

    conn.release()

    return order
      } catch (err) {
          throw new Error(`Could not add new order . Error: ${err}`)
      }
  }


  async updateOrder(b: Order): Promise<Order> {
    try {
      
      const sql = `UPDATE order_books 
                  SET quantity=$1, user_id=$2, books_id=$3,status=$4
                  WHERE id=$5 
                  RETURNING *`

  // @ts-ignore
  const conn = await Client.connect()

  const result = await conn
      .query(sql, [b.quantity, b.user_id, b.books_id,b.status, b.id])

  const order = result.rows[0]

  conn.release()

  return order
    } catch (err) {
        throw new Error(`Could not add new order . Error: ${err}`)
    }
}

  async delete(id: string): Promise<Order> {
      try {
    const sql = 'DELETE FROM order_books WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const order = result.rows[0]

    conn.release()

    return order
      } catch (err) {
          throw new Error(`Could not delete order ${id}. Error: ${err}`)
      }
  }
}
