import { order_products, order_productsSouq, order} from '../models/order';

const souq = new order_productsSouq()

describe("Souq Model", () => {
  it('get all order', () => {
    // get all data and check fun
    expect(souq.index).toBeDefined();
  });

  it('get all order', () => {
    // get all data and check fun
    expect(souq.index).toBeDefined();
  });

  
  it('add a order user', async () => {
    // create order
    const result = await souq.ordercreate({
      id: 1,
      user_id: 1,
      status: "open"
    });
    // check Equal result 
    // after create user
    console.log(result);

    expect(result).toEqual({
      id: 1,
      user_id: 1,
      status: "open"
    });
  });


  it('add a order', async () => {
    // create order
    const result = await souq.create({
      id: 1,
      quantity: 1,
      order_id: 1,
      product_id: 1
    });
    // check Equal result 
    // after create user
    console.log(result);

    expect(result).toEqual({
      id: 1,
      quantity: 1,
      order_id: 1,
      product_id: 1
    });
  });
  it('update a order', async () => {
    // up order
    const result = await souq.create({
      id: 1,
      quantity: 1,
      order_id: 1,
      product_id: 1
    });
    // check Equal result 
    // after uo user
    console.log(result);

    expect(result).toEqual({
      id: 1,
      quantity: 1,
      order_id: 1,
      product_id: 1
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
      order_id: 1,
      product_id: 1
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
      order_id: 1,
      product_id: 1
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
