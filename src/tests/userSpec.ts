import { User, UserSouq } from '../models/user';

const souq = new UserSouq()
// describe start
describe("Souq Model", () => {
  it('show home', () => {
    // test index in class BookSouq 
    expect(souq.index).toBeDefined();
  });

  it('show home', () => {
    // test index in class BookSouq 
    expect(souq.index).toBeDefined();
  });

 
  
// check  fun create class
  it(' add a user', async () => {
    // wait create new by class BookSouq
    const result = await souq.create({
      'id': 1,
      'firstName': 'Ahmed',
      'lastName': 'Azzam',
      'email': 'aW@email.cc',
      'phone': '123',
      'password': 'hash'
    });
    // check Equal result 
    // after create user
    console.log(result);
    expect(result).toEqual({
      'id': 1,
      'firstName': 'Ahmed',
      'lastName': 'Azzam',
      'email': 'aW@email.cc',
      'phone': '123',
      'password': 'hash'
    });
  });

// check  fun update class
it(' up a user', async () => {
  // wait update by class BookSouq
  const result = await souq.updateUser({
    'id': 1,
    'firstName': 'Ahmed',
    'lastName': 'Azzam',
    'email': 'aW@email.cc',
    'phone': '123',
    'password': 'hash'
  });
  // check Equal result 
  // after update user
  console.log(result);
  expect(result).toEqual({
    'id': 1,
    'firstName': 'Ahmed',
    'lastName': 'Azzam',
    'email': 'aW@email.cc',
    'phone': '123',
    'password': 'hash'
  });
});
  it('list users', async () => {
    // get all data
    const result = await souq.index();
    // check Equal result 
    // after create user
    expect(result).toEqual([{
        id: 1,
        firstName: 'Ahmed',
        lastName: 'Azzam',
        email: 'aW@email.cc',
        phone: '123',
        password: 'hash',
    }]);
  });

  it('get single user', async () => {
    // wait function  
    const result = await souq.show("1");
    // check Equal result 
    // after create user
    expect(result).toEqual({
        id: 1,
        firstName: 'Ahmed',
        lastName: 'Azzam',
        email: 'aW@email.cc',
        phone: '123',
        password: 'hash',
    });
  });

  it('delete user', async () => {
    // delete by id
    souq.delete("1");
    // wait function  delete
    const result = await souq.index()
    // check Equal result 
    // after create user
    expect(result).toEqual([]);
  });
});
// describe eend