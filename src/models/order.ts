// conn database
import Client from '../database'
// make type  for models
export type order_products = {
  id: number;
  quantity: number;
  order_id: number;
  product_id: number;
}
export type order = {
  id: number;
  status: string;
  user_id: number;
}


let id: string
// make class models 
export class order_productsSouq {
  // function get all  order for order_id 
  async index(): Promise<order_products[]> {
    // get all order for order_id  
    const conn = await Client.connect()
    // const sql = 'SELECT * FROM order_products '
    const sql = `SELECT * FROM products  
      INNER JOIN order_products  ON products .id = order_products .product_id  
      order by order_products .product_id  asc;`
    // order_id  bigint REFERENCES users(id) NOT NULL,
    // product_id  bigint REFERENCES products (id) NOT NULL,

    const result = await conn.query(sql)
    // conn database release
    conn.release()
    console.log(result.rows);

    return result.rows
  }
  // fun show product by id
  async show(id: string): Promise<order_products> {
    const sql = 'SELECT * FROM order_products  WHERE id=($1)'
    // conn database
    const conn = await Client.connect()
    // query data info
    const result = await conn.query(sql, [id])
    // conn database release
    conn.release()
    // return show product
    return result.rows[0]
  }
  // make create fun INSERT INTO order_products 
  async create(a: order_products): Promise<order_products> {
    const sql = 'INSERT INTO order_products  (quantity, order_id , product_id  ) VALUES($1, $2, $3 ) RETURNING *'
    // conn database
    const conn = await Client.connect()
    // query data
    const result = await conn
      .query(sql, [a.quantity, a.order_id, a.product_id])

    const order = result.rows[0]
    // conn database release
    conn.release()
    // return data order
    return order
  }


  async updateorder_products(a: order_products): Promise<order_products> {

    const sql = `UPDATE order_products  
                  SET quantity=$1, order_id =$2, product_id =$3
                  WHERE id=$4 
                  RETURNING *`

    // conn database
    const conn = await Client.connect()

    const result = await conn
      .query(sql, [a.quantity, a.order_id, a.product_id, a.id])

    const order = result.rows[0]

    conn.release()

    return order
  }

  async delete(id: string): Promise<order_products> {
    const sql = 'DELETE FROM order_products  WHERE id=($1)'
    // conn database
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const order = result.rows[0]

    conn.release()

    return order
  }

  // make create fun INSERT INTO order_products 
  async ordercreate(a: order): Promise<order> {
    const sql = 'INSERT INTO orders  ( status , user_id  ) VALUES($1, $2 ) RETURNING *'
    // conn database
    const conn = await Client.connect()
    // query data
    const result = await conn
      .query(sql, [a.status, a.user_id])

    const order = result.rows[0]
    // conn database release
    conn.release()
    // return data order
    return order
  }

}

