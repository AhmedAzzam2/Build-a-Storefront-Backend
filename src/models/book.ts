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
      // connected database
      const conn = await Client.connect()
      const sql = 'SELECT * FROM books'
      // put it in query
      const result = await conn.query(sql)

      conn.release()
      // result all books in home page
      return result.rows
  }
  // show single page by id book
  async show(id: string): Promise<Book> {
      const sql = 'SELECT * FROM books WHERE id=($1)'
      // like index fun but get one
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
  }
  // insert book info by fun create
  async create(a: Book): Promise<Book> {
      const sql = 'INSERT INTO books (title, author, total_pages,price, summary) VALUES($1, $2, $3, $4, $5 ) RETURNING *'
      // connect it 
      const conn = await Client.connect()

      const result = await conn.query(sql, [a.title, a.author, a.total_pages, a.price, a.summary])

      const book = result.rows[0]

      conn.release()

      return book
  }

  // update Book by id
  async updateBook(a: Book): Promise<Book> {
      const sql = `UPDATE books 
                  SET title=$1, author=$2, total_pages=$3 , price=$4, summary=$5 
                  WHERE id=$6 
                  RETURNING *`

      // conn
      const conn = await Client.connect()
      // put info in query
      const result = await conn
        .query(sql, [a.title, a.author, a.total_pages, a.price, a.summary, a.id])

      const book = result.rows[0]

      conn.release()

      return book
  }
  // delete book fun
  async delete(id: string): Promise<Book> {
      const sql = 'DELETE FROM books WHERE id=($1)'
      // conn db
      const conn = await Client.connect()
      // delete book by id
      const result = await conn.query(sql, [id]) 
      const book = result.rows[0]
      // connect releasr 
      conn.release()
      // return book
      return book
  }
}

