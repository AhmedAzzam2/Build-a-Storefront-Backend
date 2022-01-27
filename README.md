# image processing api 

## Getting Started

### Installing Dependencies

project requires having node installed https://nodejs.org/en/download/

run ```npm install``` to install the dependencies

## Testing
Testing is done using jasmine
To run the tests, run 

npm run start
```
## db-migrate up
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



 ![alt text]( https://github.com/AhmedAzzam2/Build-a-Storefront-Backend/blob/main/image/Screenshot%202022-01-26%20212917.jpg?raw=true)

## API Endpoints
#### Books
- Index 
- Show
- Create [token required] 

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### books access by token
-  id
-  title: string;
-  author: string;
-  total_pages: number;
-  price: number;
-  summary: string;

#### User 
-id: number;
-firstName: string;
-lastName: string;
-email: string;
-phone: string;
-password: string;

#### Orders access by token
-id: number;
-quantity: number;
-user_id: string;
-books_id: string;
-status: string;



#### Author:
<sup>Ahmed Azzam

## my source code 
https://github.com/udacity/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter

<sup> and jwt
https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript