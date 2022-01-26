// @ts-ignore
import Client from '../database'

// make type for class BookSouq
export type Book = {
     id: number;
     title: string;
     author: string;
     total_pages: number;
     price: number;
     summary: string;
}
// class BookSouq for action crud Model book 
export class BookSouq {
  async index(): Promise<Book[]> {
    try {
      // connected database
      const conn = await Client.connect()
      const sql = 'SELECT * FROM books'
      // put it in query
      const result = await conn.query(sql)

      conn.release()
    // result all books in home page
      return result.rows 
    } catch (err) {
      throw new Error(`no books. Err: ${err}`)
    }
  }
  // show single page by id book
  async show(id: string): Promise<Book> {
    try {
    const sql = 'SELECT * FROM books WHERE id=($1)'
    // like index fun but get one
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`no find book ${id}. Err: ${err}`)
    }
  }
// insert book info by fun create
  async create(b: Book): Promise<Book> {
      try {
    const sql = 'INSERT INTO books (title, author, total_pages,price, summary) VALUES($1, $2, $3, $4, $5 ) RETURNING *'
    // connect it 
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [b.title, b.author, b.total_pages,b.price, b.summary])

    const book = result.rows[0]

    conn.release()

    return book
      } catch (err) {
          throw new Error(`Could not add new book . Error: ${err}`)
      }
  }

// update Book by id
  async updateBook(b: Book): Promise<Book> {
    try {
      
      const sql = `UPDATE books 
                  SET title=$1, author=$2, total_pages=$3, summary=$4 
                  WHERE id=$5 
                  RETURNING *`

  // conn
  const conn = await Client.connect()
// put info in query
  const result = await conn
      .query(sql, [b.title, b.author, b.total_pages, b.summary,b.id])

  const book = result.rows[0]

  conn.release()

  return book
    } catch (err) {
        throw new Error(`book no add . Error: ${err}`)
    }
}
// delete book fun
  async delete(id: string): Promise<Book> {
      try {
    const sql = 'DELETE FROM books WHERE id=($1)'
    // conn
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const book = result.rows[0]

    conn.release()

    return book
      } catch (err) {
          throw new Error(`no delete book ${id}. Error: ${err}`)
      }
  }
}

