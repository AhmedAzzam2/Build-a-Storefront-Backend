import { Order, OrderSouq } from '../models/order';

const souq = new OrderSouq()

describe("Souq Model", () => {
  it('get all order', () => {
    // get all data and check fun
    expect(souq.index).toBeDefined();
  });

  it('get all order', () => {
    // get all data and check fun
    expect(souq.index).toBeDefined();
  });
 
  it('add a order', async () => {
    // create order
    const result = await souq.create({
        id: 1,
        quantity: 1,
        user_id: '1',
        books_id: '1',
        status: 'active'
    });
    // check Equal result 
    // after create user
    console.log(result);
    
    expect(result).toEqual({
        id: 1,
        quantity: 1,
        user_id: '1',
        books_id: '1',
        status: 'active'
    });
  });
  it('update a order', async () => {
    // up order
    const result = await souq.create({
        id: 1,
        quantity: 1,
        user_id: '1',
        books_id: '1',
        status: 'active'
    });
    // check Equal result 
    // after uo user
    console.log(result);
    
    expect(result).toEqual({
        id: 1,
        quantity: 1,
        user_id: '1',
        books_id: '1',
        status: 'active'
    });
  });


  it('list orders', async () => {
    // wait
    const result = await souq.index();
    // check Equal result 
    // after create user
    expect(result).toEqual([{
        id: 1,
        quantity: 1,
        user_id: '1',
        books_id: '1',
        status: 'active'
    }]);
  });

  it('show order by id', async () => {
    // wait it
    const result = await souq.show("1");
    // check Equal result 
    // after create user
    expect(result).toEqual({
        id: 1,
        quantity: 1,
        user_id: '1',
        books_id: '1',
        status: 'active'
    });
  });

  it('delete order', async () => {
    // delete order by id
    souq.delete("1");
    ///// wait result del
    const result = await souq.index()
    // check Equal result 
    // after create user
    expect(result).toEqual([]);
  });
});
