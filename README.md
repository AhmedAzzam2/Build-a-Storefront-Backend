# Build-a-Storefront-Backend

## Getting Started

### Installing Dependencies

product requires having node installed https://nodejs.org/en/download/

run ```npm install``` to package installation instructions

ports the backend and database are running on ``` 5432 ```
ports the backend and express JS are running on ``` 3000 ```

Setup Database

user postgres, PASSWORD 'a'

create DATABASE p1

create test DATABASE t1

```
used Postgres for the database
used Express for server
dotenv environment variables
db-migrate for migrations
JWTs
jasmine for testing
```
## db info .env
```
POSTGRES_HOST=127.0.0.1

POSTGRES_DB=p1

POSTGRES_TEST_DB=t1

POSTGRES_USER=postgres

POSTGRES_PASSWORD=a

BCRYPT_PASSWORD=mypassword

SALT_ROUNDS=10

ENV=dev
TOKEN_SECRET=14793feeaae5a630f476bc85b46e75e6aaf9215f96ada913b86398ec2449abc538ce64a8424eba0fbf6caa948e28f3ca3ac22e03087b5977f2d78cd12bb7c032

```
install run

## db-migrate up
``` migration:run ```
 
## start
```
npm run start
```
## Testing
Testing is done using jasmine
To run the tests, run 
setup and connect to the database

## migration
'''
npm run migration:run
```
## reset
```
npm run reset
```
## test from window
```
npm run test:window 
```



## API Reference
 

### Endpoints 
### GET /
- General:
    - Returns a crud work on api server
- Sample: `curl http://127.0.0.1:3000/`

### GET POST /users
- General:
    - Returns all users on api server
- Sample: `curl http://127.0.0.1:3000/users`

### GET POST /products
- General:
    - Returns all products on api server
- Sample: `curl http://127.0.0.1:3000/products`

### GET POST /orders
- General:
    - Returns all orders on api server
- Sample: `curl http://127.0.0.1:3000/orders`

 
### GET /orders/:id/products
- General: 
    - add user on api server
- Sample: `curl http://127.0.0.1:3000/orders/:id/products`
 
## API Endpoints
#### products
- Index   
- Show   
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
