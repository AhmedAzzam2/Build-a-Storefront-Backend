// @ts-ignore
import Client from '../database'

export type User = {
     id: number;
     firstName: string;
     lastName: string;
     email: string;
     phone: string;
     password: string;
}

export class UserSouq {
  async index(): Promise<User[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM users'

      const result = await conn.query(sql)

      conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`)
    }
  }

  async show(id: string): Promise<User> {
    try {
    const sql = 'SELECT * FROM users WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find user ${id}. Error: ${err}`)
    }
  }

  async create(b: User): Promise<User> {
      try {
    const sql = 'INSERT INTO users (firstName, lastName, email,phone, password) VALUES($1, $2, $3, $4, $5) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [b.firstName, b.lastName, b.email,b.phone, b.password])

    const user = result.rows[0]

    conn.release()

    return user
      } catch (err) {
          throw new Error(`Could not add new user . Error: ${err}`)
      }
  }


  async updateUser(b: User): Promise<User> {
    try {
      
      const sql = `UPDATE users 
                  SET firstName=$1, lastName=$2, email=$3,phone=$4, password=$5 
                  WHERE id=$6 
                  RETURNING *`

  // @ts-ignore
  const conn = await Client.connect()

  const result = await conn
      .query(sql, [b.firstName, b.lastName, b.email,b.phone, b.password,b.id])

  const user = result.rows[0]

  conn.release()

  return user
    } catch (err) {
        throw new Error(`Could not add new user . Error: ${err}`)
    }
}

  async delete(id: string): Promise<User> {
      try {
    const sql = 'DELETE FROM users WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const user = result.rows[0]

    conn.release()

    return user
      } catch (err) {
          throw new Error(`Could not delete user ${id}. Error: ${err}`)
      }
  }
}

