import { product, productSouq } from '../models/product';

const souq = new productSouq()
// describe start
describe("Souq Model", () => {
  it('show all data', () => {
    //.. check home product
    expect(souq.index).toBeDefined();
  });

  it('show all data', () => {
    //.. check home product
    expect(souq.index).toBeDefined();
  });
 
  it('add a product', async () => {
    // new product
    const result = await souq.create({
      'id': 1,
      'name': 'Learn more About that', 
      'price': 10,
    });
    // check Equal result
    console.log(result);
    
    expect(result).toEqual({
      'id': 1,
      'name': 'Learn more About that', 
      'price': 10,
    });
  });
  it('list products ', async () => {
    const result = await souq.index();
    // check Equal result
    expect(result).toEqual([{
      'id': 1,
      'name': 'Learn more About that', 
      'price': 10,
    }]);
  });

  it('show product by id', async () => {
    // wait
    const result = await souq.show("1");
    // Equal result /
    expect(result).toEqual({
      'id': 1,
      'name': 'Learn more About that', 
      'price': 10,
    });
  });

  
 
  it('update a product', async () => {
    // UPDATE product
    const result = await souq.updateproduct({
      'id': 1,
      'name': 'Learn more About that', 
      'price': 10,
    });
    // check Equal result
    console.log(result);
    
    expect(result).toEqual({
      'id': 1,
      'name': 'Learn more About that', 
      'price': 10,
    });
  });

  
  it('delete product', async () => {
    souq.delete("1");
    const result = await souq.index()

    // check Equal result null 
    expect(result).toEqual([]);
  });
});
// describe end