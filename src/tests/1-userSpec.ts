import { User, UserSouq } from '../models/user';

const souq = new UserSouq()
// describe start
describe("Souq Model", () => {
  it('show home', () => {
    // test index in class productSouq 
    expect(souq.index).toBeDefined();
  });

  it('show home', () => {
    // test index in class productSouq 
    expect(souq.index).toBeDefined();
  });



  // check  fun create class
  it(' add a user', async () => {
    // wait create new by class productSouq
    const result = await souq.create({  
      "id": 1,
      "firstname": "req.body.2",
      "lastname": "req.body.lastname",
      "password": "$2b$10$dGS0svO7A9KPMYG4FL/HougWHjlypj7/4sU.yuz4iAGEHtVZa8Xua"
    }); 
    
    // check Equal result 
    // after create user
    console.log(result);
    expect(result).toEqual({
      "id": 1,
      "firstname": "req.body.2",
      "lastname": "req.body.lastname",
      "password": "$2b$10$dGS0svO7A9KPMYG4FL/HougWHjlypj7/4sU.yuz4iAGEHtVZa8Xua"
    });
  });

  // check  fun update class
  it(' up a user', async () => {
    // wait update by class productSouq
    const result = await souq.updateUser({
      id: 1,
      firstname: "'Ahmed'",
      lastname: "'Azzam'",
      password: "'hash'"
    });
    // check Equal result 
    // after update user
    console.log(result);
    expect(result).toEqual({
      id: 1,
      firstname: "'Ahmed'",
      lastname: "'Azzam'",
      password: "'hash'"
    });
  });
  it('list users', async () => {
    // get all data
    const result = await souq.index();
    // check Equal result 
    // after create user
    expect(result).toEqual([{
      id: 1,
      firstname: "'Ahmed'",
      lastname: "'Azzam'",
      password: "'hash'"
    }]);
  });

  it('get single user', async () => {
    // wait function  
    const result = await souq.show("1");
    // check Equal result 
    // after create user
    expect(result).toEqual({
      id: 1,
      firstname: "'Ahmed'",
      lastname: "'Azzam'",
      password: "'hash'"
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