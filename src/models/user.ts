// connect database
import Client from '../database'
// make type  for function
export type User = {
  id?: number;
  firstname: string;
  lastname: string;
  password: string;
}
// make class UserSouq
export class UserSouq {
  // function index for get all users
  async index(): Promise<User[]> {
    // connect database
    const conn = await Client.connect()
    const sql = 'SELECT * FROM users'
    // add sql in query
    const result = await conn.query(sql)
    // conn database release
    conn.release()
    // return all users
    return result.rows
  }
  // make function for show single user
  async show(id: string): Promise<User> {
    // sql users
    const sql = 'SELECT * FROM users WHERE id=($1)'
    // connect database
    const conn = await Client.connect()
    // query sql
    const result = await conn.query(sql, [id])
    conn.release()
    // return  single page 
    return result.rows[0]
  }
// INSERT INTO users function
  async create(a: User): Promise<User> {
    const sql = 'INSERT INTO users (firstname,lastname,password) VALUES($1, $2, $3) RETURNING *'
    // connect database
    const conn = await Client.connect()
    // query data create input
    const result = await conn.query(sql, [a.firstname, a.lastname, a.password])
    const user = result.rows[0]

    conn.release()

    return user
  }


// UPDATE INTO users function
  async updateUser(a: User): Promise<User> {
      const sql = `UPDATE users 
                  SET firstname=$1, lastname=$2,  password=$3 
                  WHERE id=$4 
                  RETURNING *`

      // connect database
      const conn = await Client.connect()

      const result = await conn
        .query(sql, [a.firstname, a.lastname, a.password, a.id])

      const user = result.rows[0]

      conn.release()

      return user
  }
////// del user
  async delete(id: string): Promise<User> {
      const sql = 'DELETE FROM users WHERE id=($1)'
      // connect database
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      const user = result.rows[0]

      conn.release()
      return user
  }
}

