// @ts-ignore
import Client from '../database'

// make type for class productSouq
export type product = {
  id?: number;
  name: string;
  price: number;
}
// class productSouq for action crud Model product 
export class productSouq {
  async index(): Promise<product[]> {
    try { 
      // connected database
      const conn = await Client.connect()
      const sql = 'SELECT * FROM products '
      // put it in query
      const result = await conn.query(sql)

      conn.release()
      // result all products  in home page
      return result.rows
    } catch (err) {
      throw new Error(`Cannot get . Erorr: ${err}`)
    }
  }
  // show single page by id product
  async show(id: string): Promise<product> {
    try{
      const sql = 'SELECT * FROM products  WHERE id=($1)'
      // like index fun but get one
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Cannot get . Erorr: ${err}`)
    }
  }
  // insert product info by fun create
  async create(a: product): Promise<product> {
    try{
      const sql = 'INSERT INTO products  (name,price) VALUES($1, $2 ) RETURNING *'
      // connect it 
      const conn = await Client.connect()

      const result = await conn.query(sql, [a.name, a.price])

      const product = result.rows[0]

      conn.release()

      return product
    } catch (err) {
      throw new Error(`Cannot get . Erorr: ${err}`)
    }
  }

  // update product by id
  async updateproduct(a: product): Promise<product> {
    try{
      const sql = `UPDATE products  
                  SET name=$1, price=$2 
                  WHERE id=$3 
                  RETURNING *`

      // conn
      const conn = await Client.connect()
      // put info in query
      const result = await conn
        .query(sql, [a.name,  a.price,  a.id])

      const product = result.rows[0]

      conn.release()

      return product
    } catch (err) {
      throw new Error(`Cannot get . Erorr: ${err}`)
    }
  }
  // delete product fun
  async delete(id: string): Promise<product> {
    try{
      const sql = 'DELETE FROM products  WHERE id=($1)'
      // conn db
      const conn = await Client.connect()
      // delete product by id
      const result = await conn.query(sql, [id]) 
      const product = result.rows[0]
      // connect releasr 
      conn.release()
      // return product
      return product
    } catch (err) {
      throw new Error(`Cannot get . Erorr: ${err}`)
    }
  }
}

