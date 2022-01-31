# image processing api 

## Getting Started

### Installing Dependencies

product requires having node installed https://nodejs.org/en/download/

run ```npm install``` to install the dependencies

## db info .env
'''
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=p1
POSTGRES_TEST_DB=t1
POSTGRES_USER=postgres
POSTGRES_PASSWORD=a
'''
## Testing
Testing is done using jasmine
To run the tests, run 

start
```
## npm run start
```
migration:run
```
## db-migrate --env test reset
```
npm run reset
```
## test
```
ENV=test db-migrate --env test up && jasmine && db-migrate db:drop test

## set ENV=test && db-migrate --env test up && jasmine && db-migrate --env test reset
''' 
npx run server test:window: 
'''
## API Reference
 
 

### Endpoints 
### GET /
- General:
    - Returns a crud work on api server
- Sample: `curl http://127.0.0.1:3000/`

### GET /users
- General:
    - Returns all users on api server
- Sample: `curl http://127.0.0.1:3000/users`
### post /users
- General:
    - add user on api server
- Sample: `curl http://127.0.0.1:3000/users`
### GET /products
- General:
    - Returns all products on api server
- Sample: `curl http://127.0.0.1:3000/products`
### post /products
- General:
    - add user on api server
- Sample: `curl http://127.0.0.1:3000/products`
### GET /orders
- General:
    - Returns all orders on api server
- Sample: `curl http://127.0.0.1:3000/orders`
### post /orders
- General:
    - add user on api server
- Sample: `curl http://127.0.0.1:3000/orders`
### post /orders
- General:
    - add user on api server
- Sample: `curl http://127.0.0.1:3000/orders`
 
### GET //orders/:id/products
- General: 
    - add user on api server
- Sample: `curl http://127.0.0.1:3000/orders/:id/products`
 
## API Endpoints
#### products
- Index  [token required] 
- Show [token required] 
- Create [token required] 

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### order_productss
- Current order_products by user (args: user id)[token required]

## Data Shapes
#### products  access by token
-  id
-  name: string;
-  price: number;

#### User 
-id: number;
-firstname: string;
-lastname: string;
-password: string;

#### order_productss access by token
-id: number;
-quantity: number;
-order_id : string;
-product_id : string;
#### order_productss access by token
-id: number;
-user_id : string;
-status: string;



#### Author:
<sup>Ahmed Azzam

## my source code 
https://github.com/udacity/nd0067-c2-creating-an-api-with-postgresql-and-express-product-starter

<sup> and jwt
https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript