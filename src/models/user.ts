// connect database
import Client from '../database'
// make type  for function
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
    const sql = 'INSERT INTO users (firstName, lastName, email,phone, password) VALUES($1, $2, $3, $4, $5) RETURNING *'
    // connect database
    const conn = await Client.connect()
    // query data create input
    const result = await conn.query(sql, [a.firstName, a.lastName, a.email, a.phone, a.password])
    const user = result.rows[0]

    conn.release()

    return user
  }


// UPDATE INTO users function
  async updateUser(a: User): Promise<User> {
      const sql = `UPDATE users 
                  SET firstName=$1, lastName=$2, email=$3,phone=$4, password=$5 
                  WHERE id=$6 
                  RETURNING *`

      // connect database
      const conn = await Client.connect()

      const result = await conn
        .query(sql, [a.firstName, a.lastName, a.email, a.phone, a.password, a.id])

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

