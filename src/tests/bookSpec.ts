import { Book, BookSouq } from '../models/book';

const souq = new BookSouq()
// describe start
describe("Souq Model", () => {
  it('show all data', () => {
    //.. check home book
    expect(souq.index).toBeDefined();
  });

  it('show all data', () => {
    //.. check home book
    expect(souq.index).toBeDefined();
  });
 
  it('add a book', async () => {
    // new book
    const result = await souq.create({
      'id': 1,
      'title': 'Learn more About that', 
      'author': 'Ahmed ',
      'total_pages': 120,
      'price': 10,
      'summary': 'string;'
    });
    // check Equal result
    console.log(result);
    
    expect(result).toEqual({
      'id': 1,
      'title': 'Learn more About that', 
      'author': 'Ahmed ',
      'total_pages': 120,
      'price': 10,
      'summary': 'string;'
    });
  });
  it('list books', async () => {
    const result = await souq.index();
    // check Equal result
    expect(result).toEqual([{
      id: 1,
      title: 'Learn more About that',
      author: 'Ahmed ',
      total_pages: 120,
      price: 10,
      summary: 'string;'
    }]);
  });

  it('show book by id', async () => {
    // wait
    const result = await souq.show("1");
    // Equal result /
    expect(result).toEqual({
      id: 1,
      title: 'Learn more About that',
      author: 'Ahmed ',
      total_pages: 120,
      price: 10,
      summary: 'string;'
    });
  });

  
 
  it('update a book', async () => {
    // UPDATE book
    const result = await souq.updateBook({
      'id': 1,
      'title': 'chane more', 
      'author': 'Ahmed Azzam',
      'total_pages': 500,
      'price': 40,
      'summary': 'love learn;'
    });
    // check Equal result
    console.log(result);
    
    expect(result).toEqual({
      'id': 1,
      'title': 'chane more', 
      'author': 'Ahmed Azzam',
      'total_pages': 500,
      'price': 40,
      'summary': 'love learn;'
    });
  });

  
  it('delete book', async () => {
    souq.delete("1");
    const result = await souq.index()

    // check Equal result null 
    expect(result).toEqual([]);
  });
});
// describe end